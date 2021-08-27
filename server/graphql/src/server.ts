import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { prisma } from './context'
import { createContext } from './context'
import { configureRedis } from './redis'
import { schema } from './schema'
import { GraphQLError } from 'graphql'
import { execute, subscribe } from 'graphql'
import { createServer } from 'http'

import admin from 'firebase-admin'
var serviceAccount = require('../../graphql/spav5-ed370-firebase-adminsdk-f0gaq-a4b9e2159d.json')

const port = process.env.NODE_PORT || 4000

//const { redis, pubsub } = configureRedis()
let app = express()

app.use(
  '/graphql',
  bodyParser.urlencoded({
    limit: '200mb',
    extended: true,
    parameterLimit: 100000,
  }),
)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

app.use(cors())
app.use('/graphql', bodyParser.json({ limit: '200mb' }))
const apolloServer = new ApolloServer({
  schema,
  context: (req) => createContext(req),
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
  console.log(`🚀 Server ready at: http://localhost:${port}/graphql\n⭐️ `),
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema,
        onOperation: (message: string, params: any) => {
          return {
            ...params,
            context: {
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
