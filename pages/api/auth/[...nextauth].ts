import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
     GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
   
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)

