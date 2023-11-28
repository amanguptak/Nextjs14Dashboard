// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
        
//       },
//     }),
//   ],
// })


import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET,
    }),
  ],
})