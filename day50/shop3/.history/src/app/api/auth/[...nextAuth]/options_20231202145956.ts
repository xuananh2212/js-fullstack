import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "vui lòng nhập tên tài khoản",
        },
        email: {
          label: "name:",
          type: "text",
          placeholder: "vui lòng nhập email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "vui lòng nhập password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "42", name: "tuananh", password: "123" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
