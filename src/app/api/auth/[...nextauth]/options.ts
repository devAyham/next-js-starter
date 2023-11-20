import { PagesRotes } from "@/constants/routes/pagesRoutes";
import { log } from "console";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  pages: {
    signIn: PagesRotes.AuthRoutes.SignIn.index,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:8000/auth/sign-in'", {
          method: "POST",
          headers: {
            "Content-Type": "applicaation/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        })
          .then((res) => {
            return res;
          })
          .catch((err) => {
            log(err);
            return null;
          });
        const user = await res?.json();
        // const user = {
        //   name: "ayham",
        //   password: "123",
        // };
        console.log(user);

        if (
          res?.ok &&
          user
          // credentials?.username === user.name &&
          // credentials?.password === user.password
        ) {
          return user as any;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};
