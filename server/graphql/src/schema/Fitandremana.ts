import { objectType } from 'nexus'

export const Fitandremana = objectType({
  name: 'Fitandremana',
  definition(t) {
    t.model.id()
    t.model.lahFar()
    t.model.lahSp()
    t.field('mpitandrina', { type: 'Mpitandrina' })
    t.model.createdAt()
    t.model.updatedAt()
  },
})
