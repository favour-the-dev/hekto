import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "@lib/mongodb";
import User from "@models/User";
import bcrypt from "bcryptjs";

interface GoogleProviderOptions {
    clientId: string,
    clientSecret: string
    scope: string[]
}

const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOGGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            scope: ["profile", "email"]
        } as GoogleProviderOptions),
        Credentials({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any){
                // connect to mongo Db
                await connectDB();
                // check if email ss in the database
                const user = await User.findOne({
                    email: credentials?.email,
                }).select("+password")
                if(!user) throw new Error('Wrong email');
                // check if password is correct
                const passwordMatch = await bcrypt.compare(credentials?.password, user.password)
                if(!passwordMatch) throw new Error('Wrong password');
                return user;
            }
        })
    ],
    session: {
        strategy: "jwt",
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}