import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { Adapter } from "next-auth/adapters"
import { cert } from "firebase-admin/app";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/firebase";
import { compare } from "bcrypt";
import { createDocsDb } from "@/utils/createDocsDb";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true
    }),

    CredentialsProvider({

      name: "Credentials",

      credentials: {
        email: {},
        password: {}
      },

      async authorize(credentials, req) {

        try {
          const docRef = await db.collection("users").doc(credentials!.email).get();

          if (!docRef.exists) {
            return null;
          }

          const passwordMatch = await compare(credentials!.password, docRef.data()!.password);

          if (!passwordMatch) {
            return null;
          }

          const user = docRef.data();
          return { id: user!.id, name: user!.name, email: user!.email };

        } catch (error) {
          return null;
        }
      }
    })
  ],

  callbacks: {
    async session({ session, token }) {

      const userId = token.sub;
      const userEmail = token.email

      const userData = await db.collection("users").doc(userId! || userEmail!).get()

      const id = userId! || userEmail!

      createDocsDb(id)

      return { ...session, user: { name: userData.data()!.name, image: userData.data()!.image || "" } }
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: "/"
  },
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  }) as Adapter,
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }