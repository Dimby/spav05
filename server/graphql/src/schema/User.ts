import { extendType, objectType, stringArg } from 'nexus'

// export const AuthPayload = objectType({
//   name: 'AuthPayload',
//   definition(t) {
//     t.string('accessToken')
//     t.field('user', { type: 'User' })
//   },
// })

export const User = objectType({
  name: 'User',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('email', { type: 'String' })
  },
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nullable.field('me', {
      type: 'User',
      resolve: (_, args, ctx) => {
        return null
      },
    })
  },
})

// export const UserMutation = extendType({
//   type: 'Mutation',
//   definition(t) {
//     t.field('login', {
//       args: {
//         email: stringArg(),
//         password: stringArg(),
//       },
//       type: 'AuthPayload',
//       resolve: (_, args, ctx) => {
//         return {} as any
//       },
//     })
//   },
// })
