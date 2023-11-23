import { PagesRotes } from "@/constants/routes/pagesRoutes";
import { log } from "console";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  // pages: {
  //   signIn: PagesRotes.AuthRoutes.SignIn.index,
  // },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        try {
          const res = await fetch("http://localhost:3001/auth/sign-in", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
          if (res.status == 401) {
            console.log("res");

            return null;
          }
          const user = await res?.json();
          console.log(user);

          if (res?.ok && user) {
            return user;
          } else {
            return null;
          }
        } catch (err) {
          console.log("err");
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
      console.log("sssss", token);
      session.user = token.user;
      session.tokens = token.tokens;

      return session;
    },
  },
};
