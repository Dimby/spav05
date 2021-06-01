import { extendType, objectType, stringArg } from 'nexus'
import { ApolloError } from 'apollo-server-express'

export const Birao = objectType({
  name: 'Birao',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('fonction', { type: 'String' })
    t.field('titre', { type: 'String' })
    t.field('fitMis', { type: 'String' })
    t.field('urlPicture', { type: 'String' })
    t.field('urlPicturePublic', { type: 'String' })
  },
})

export const BiraoQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nullable.field('getAllBirao', {
      type: 'Birao',
      resolve: async (_, args, ctx) => {
        const birao = await ctx.prisma.birao.findMany()
        return birao
      },
    })
  },
})

export const BiraoMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('upsertBirao', {
      args: {
        id: stringArg(),
        name: stringArg(),
        firstName: stringArg(),
        fonction: stringArg(),
        titre: stringArg(),
        fitMis: stringArg(),
      },
      type: 'Birao',
      resolve: async (_, args, ctx) => {
        if (args.name?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny anarana')
        } else if (args.firstName?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny fanampina anarana')
        } else if (args.fitMis?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny fitandremana misy anao')
        } else if (args.titre?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny titre')
        } else if (args.fonction?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny asa iandreketana')
        } else {
          const birao = await ctx.prisma.birao.upsert({
            where: { id: args?.id ?? '' },
            create: {
              name: args.name ?? '',
              firstName: args.firstName ?? '',
              fitMis: args.fitMis ?? '',
              titre: args.titre ?? '',
              fonction: args.fonction ?? '',
            },
            update: {
              id: args.id ?? '',
              name: args.name ?? '',
              firstName: args.firstName ?? '',
              fitMis: args.fitMis ?? '',
              titre: args.titre ?? '',
              fonction: args.fonction ?? '',
            },
          })
          return birao
        }
      },
    }),
      t.field('deleteBirao', {
        args: {
          id: stringArg(),
        },
        type: 'Birao',
        resolve: async (_, args, ctx) => {
          if (args.id?.trim().length === 0) {
            throw new ApolloError('Ampidiro ny id')
          } else {
            const birao = await ctx.prisma.birao.delete({
              where: { id: args?.id ?? '' },
            })
            return birao
          }
        },
      })
  },
})
