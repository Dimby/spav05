import { PrismaClient, User } from '@prisma/client'
import { decodeAccessToken } from './lib/auth'

export const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  currentUser: User | null
}
export const createContext = async ({ req }: any): Promise<Context> => {
  const currentUser = await decodeAccessToken(req, prisma)
  return {
    prisma,
    currentUser,
  }
}
