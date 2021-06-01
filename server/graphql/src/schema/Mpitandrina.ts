import { ApolloError } from 'apollo-server-express'
import {
  enumType,
  extendType,
  intArg,
  objectType,
  stringArg,
  nonNull,
} from 'nexus'

export const type = enumType({
  name: 'type',
  members: ['MPITANDRINA', 'KATEKISTA_DELEGUE'],
})

export const Mpitandrina = objectType({
  name: 'Mpitandrina',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.firstName()
    t.model.updatedAt()
    t.model.createdAt()
    t.list.field('fifandraisanas', { type: 'Fifandraisana' })
    t.field('fitandremana', { type: 'Fitandremana' })
    t.field('type', { type: 'type' })
  },
})

export const MpitandrinaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nullable.field('getAllMpitandrina', {
      type: 'Mpitandrina',
      resolve: async (_, args, ctx) => {
        const mpitandrina = await ctx.prisma.mpitandrina.findMany()
        return mpitandrina
      },
    })
  },
})

export const MpitandrinaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('upsertMpitandrina', {
      args: {
        id: intArg(),
        name: stringArg(),
        firstName: stringArg(),
        fitandremanaId: stringArg(),
        fifandraisanaId: stringArg(),
        type: nonNull('type'),
      },
      type: 'Mpitandrina',
      resolve: async (_, args, ctx) => {
        if (args.name?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny anarana')
        } else if (args.firstName?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny fanampina anarana')
        } else {
          const birao = await ctx.prisma.mpitandrina.upsert({
            where: { id: args?.id ?? 0 },
            create: {
              name: args.name ?? '',
              firstName: args.firstName ?? '',
              fitandremana: {
                connect: { id: args?.fitandremanaId ?? undefined },
              },
              fifandraisanas: {
                connect: { id: args.fifandraisanaId ?? undefined },
              },
              type: args.type,
            },
            update: {
              id: args.id ?? 0,
              name: args.name ?? '',
              firstName: args.firstName ?? '',
              fitandremana: {
                connect: { id: args?.fitandremanaId ?? '' },
              },
              fifandraisanas: { connect: { id: args.fifandraisanaId ?? '' } },
              type: args.type,
            },
          })
          return birao
        }
      },
    }),
      t.field('deleteMpitandrina', {
        args: {
          id: intArg(),
        },
        type: 'Mpitandrina',
        resolve: async (_, args, ctx) => {
          if (args.id === 0) {
            throw new ApolloError('Ampidiro ny id')
          } else {
            const mpitandrina = await ctx.prisma.mpitandrina.delete({
              where: { id: args?.id ?? 0 },
            })
            return mpitandrina
          }
        },
      })
  },
})
