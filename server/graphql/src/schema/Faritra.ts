import { objectType } from 'nexus'

export const Faritra = objectType({
  name: 'Faritra',
  definition(t) {
    t.model.id()
    t.model.sokajy()
    t.list.field('fitandremanas', { type: 'Fitandremana' })
    t.field('sary', { type: 'Sary' })
    t.field('mpitandrina', { type: 'Mpitandrina' })
  },
})
