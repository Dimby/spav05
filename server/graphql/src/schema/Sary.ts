import { objectType } from 'nexus'

export const Sary = objectType({
  name: 'Sary',
  definition(t) {
    t.model.id()
    t.model.urlPicture()
    t.model.urlPicturePublic()
  },
})
