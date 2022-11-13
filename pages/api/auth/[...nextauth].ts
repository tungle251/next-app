import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import clientPromise from '../../../lib/mongodb'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  database: process.env.MONGODB_URI ?? '',
  adapter: MongoDBAdapter(clientPromise),
}

export default NextAuth(authOptions)
