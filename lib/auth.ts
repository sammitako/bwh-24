import { NextAuthOptions, User, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export const authConfig: NextAuthOptions = {

  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: {  label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const validCredentials = {
          email: 'test@example.com',
          password: 'password123',
        };

        if (
          credentials.email === validCredentials.email &&
          credentials.password === validCredentials.password
        ) {
          return {
            id: '1',
            email: credentials.email,
            name: "John Doe",
          };
        } else {
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
  }
  
  export function loginIsRequiredClient() {
    if (typeof window !== "undefined") {
      const session = useSession();
      const router = useRouter();
      if (!session) router.push("/");
    }
  }