import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

interface GoogleProviderOptions {
    clientId: string,
    clientSecret: string
    scope: string[]
}

export const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOGGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            scope: ["profile", "email"]
        } as GoogleProviderOptions)
    ]
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}