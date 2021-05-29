import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { User, UserQuery } from './User'

export const schema = makeSchema({
  types: [UserQuery, User],
  plugins: [nexusPrisma()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('../context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
