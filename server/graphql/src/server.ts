import { ApolloServer } from 'apollo-server-express'
import { GraphQLError } from 'graphql'
import { configureRedis } from './redis'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { createServer } from 'http'
import { execute, subscribe } from 'graphql'
import { schema } from './schema'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { createContext } from './context'
import { prisma } from './context'

const port = process.env.NODE_PORT || 4000

const { redis, pubsub } = configureRedis()

const app = express()

app.use(
  '/graphql',
  bodyParser.urlencoded({
    limit: '200mb',
    extended: true,
    parameterLimit: 100000,
  }),
)

app.use(cors())
app.use('/graphql', bodyParser.json({ limit: '200mb' }))


const apolloServer = new ApolloServer({
  schema,
  context: (req) => createContext(req, redis, pubsub),
  formatError: (error: GraphQLError) => {
    if (error.message.startsWith('Database Error: ')) {
      return new Error('Internal server error')
    }
    // Do not send stacktrace to clients:
    if (error.extensions?.exception?.stacktrace !== undefined) {
      error.extensions.exception.stacktrace = undefined
    }
    return error
  },
})

apolloServer.applyMiddleware({ app, bodyParserConfig: { limit: '200mb' } })

const server = createServer(app)
server.listen({ port }, async () => {
  // tslint:disable-next-line: ban-comma-operator
  console.log(`🚀 Server ready at: http://localhost:${port}\n⭐️ `),
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema,
        onOperation: (message: string, params: any) => {
          return {
            ...params,
            context: {
              pubsub,
              redis,
              prisma,
            },
          }
        },
      },
      {
        server,
        path: '/graphql',
      },
    )
})
