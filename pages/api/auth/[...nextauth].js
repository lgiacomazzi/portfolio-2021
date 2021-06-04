import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  //   session: {
  //     jwt: true,
  //   },

  //   jwt: {},

  // A database is optional, but required to persist accounts in a database
  //   database: "mongodb://username:password@127.0.0.1:3306/database_name"
});
