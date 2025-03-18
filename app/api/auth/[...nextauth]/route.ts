import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "rahul@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;
                console.log(username)
                console.log(password)

                // db request to check if username and password are correct
                const user = {
                    name: "rahul",
                    id: "1",
                    username: "rahul@gmail.com"
                }

                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
})

export { handler as GET, handler as POST }