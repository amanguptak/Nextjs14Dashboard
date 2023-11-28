import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { authConfig } from "@/auth.config"
import { connectToDatabase } from "./lib/connection"
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDatabase();
    const user = await User.findOne({email: credentials.email});
    console.log("user catched",user)
    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const {signIn,signOut,auth}= NextAuth({
    ...authConfig,
  providers: [
    CredentialsProvider({
        async authorize(credentials) {
          try {
            const user = await login(credentials);
            return user;
          } catch (err) {
            return null;
          }
        },
      }),
   
      GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET,
    }),
  ],
})


 


// // export default NextAuth({
// //   providers: [
   
// //   ],
// // })