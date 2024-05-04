import { appConfig } from '@/config';
import NextAuth, { NextAuthConfig } from 'next-auth';

export const config = {
  debug: appConfig.nextAuth.debug,
  providers: [
    {
      id: 'shibboleth',
      name: 'Shibboleth',
      type: 'oidc',
      issuer: appConfig.shibboleth.issuerUrl,
      clientId: appConfig.shibboleth.clientId,
      clientSecret: appConfig.shibboleth.clientSecret,
      authorization: { params: { scope: appConfig.shibboleth.scope } },
      profile(profile) {
        return {
          id: profile.sub,
          pairwiseId: profile.sub,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        token.pairwiseId = user.pairwiseId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.sub,
        pairwiseId: token.pairwiseId,
      };
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth(config);
