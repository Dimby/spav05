import { objectType } from 'nexus'

export const Fifandraisana = objectType({
  name: 'Fifandraisana',
  definition(t) {
    t.model.id()
    t.model.fifandraisana()
    t.model.createdAt()
    t.model.updatedAt()
    t.field('mpitandrina', { type: 'Mpitandrina' })
  },
})
