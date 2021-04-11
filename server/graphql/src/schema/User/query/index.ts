import { extendType, arg } from '@nexus/schema'
import { User } from '@prisma/client'

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: async (_, args, ctx) => {
       
        return (await ctx.meUser.find(ctx.currentUser?.id || '')) as User
      },
    })
  },
})
