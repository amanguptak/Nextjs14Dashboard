import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { authConfig } from "@/authConfig"


export const {signIn,signOut,auth}= NextAuth({
    ...authConfig,
  providers: [
    // CredentialsProvider({
    //   async authorize(credentials) {
        
    //   },
    // }),
    GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET,
    }),

  ],
})





// export default NextAuth({
//   providers: [
   
//   ],
// })