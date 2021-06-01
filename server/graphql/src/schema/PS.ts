import { extendType, objectType, stringArg } from 'nexus'
import { ApolloError } from 'apollo-server-express'
import { GraphQLDate } from 'graphql-iso-date'
export const DateTime = GraphQLDate

export const PS = objectType({
  name: 'PS',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.firstName()
    t.model.email()
    t.model.nameWife()
    t.list.field('fifandraisanas', { type: 'Fifandraisana' })
    t.model.urlPicture()
    t.model.urlPicturePublic()
    t.model.dateStart()
    t.model.dateEnd()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const PSQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nullable.field('getAllPS', {
      type: 'PS',
      resolve: async (_, args, ctx) => {
        const PS = await ctx.prisma.pS.findMany()
        return PS
      },
    })
  },
})

export const PSMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('upsertPS', {
      args: {
        id: stringArg(),
        name: stringArg(),
        firstName: stringArg(),
        email: stringArg(),
        nameWife: stringArg(),
        dateStart: stringArg(),
        dateEnd: stringArg(),
        fifandraisanaId: stringArg(),
      },
      type: 'PS',
      resolve: async (_, args, ctx) => {
        if (args.name?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny anarana')
        } else if (args.firstName?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny fanampina anarana')
        } else if (args.email?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny email')
        } else if (args.nameWife?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny anaran vady')
        } else if (args.dateStart?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny daty niatombohana niasa')
        } else if (args.dateEnd?.trim().length === 0) {
          throw new ApolloError('Ampidiro ny daty niafarana niasa')
        } else {
          const ps = await ctx.prisma.pS.upsert({
            where: { id: args?.id ?? '' },
            create: {
              name: args.name ?? '',
              firstName: args.firstName ?? '',
              email: args.email ?? '',
              nameWife: args.nameWife ?? '',
              dateStart: args.dateStart ?? '',
              dateEnd: args.dateEnd ?? '',
              fifandraisanas: { connect: { id: args.fifandraisanaId ?? '' } },
            },
            update: {
              id: args.id ?? '',
              name: args.name ?? '',
              firstName: args.firstName ?? '',
              email: args.email ?? '',
              nameWife: args.nameWife ?? '',
              dateStart: args.dateStart ?? '',
              dateEnd: args.dateEnd ?? '',
              fifandraisanas: { connect: { id: args.fifandraisanaId ?? '' } },
            },
          })
          return ps
        }
      },
    }),
      t.field('deletePS', {
        args: {
          id: stringArg(),
        },
        type: 'PS',
        resolve: async (_, args, ctx) => {
          if (args.id?.trim().length === 0) {
            throw new ApolloError('Ampidiro ny id')
          } else {
            const ps = await ctx.prisma.pS.delete({
              where: { id: args?.id ?? '' },
            })
            return ps
          }
        },
      })
  },
})
