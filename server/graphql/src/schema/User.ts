import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('email', { type: 'String' })
  },
})
