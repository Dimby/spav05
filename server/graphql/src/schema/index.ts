import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { User } from './User'
import { Birao, BiraoQuery, BiraoMutation } from './Birao'
import {
  MpitandrinaQuery,
  Mpitandrina,
  MpitandrinaMutation,
  type,
} from './Mpitandrina'
import { Fifandraisana } from './Fifandraisana'
import { Fitandremana } from './Fitandremana'
import { Faritra } from './Faritra'
import { Sary } from './Sary'

export const schema = makeSchema({
  types: [
    User,
    BiraoMutation,
    Birao,
    BiraoQuery,
    MpitandrinaQuery,
    Mpitandrina,
    MpitandrinaMutation,
    type,
    Fifandraisana,
    Fitandremana,
    Faritra,
    Sary,
  ],
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
