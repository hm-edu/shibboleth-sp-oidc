import { appConfig } from '@/config';
import { Awaitable, NextAuthOptions, User } from 'next-auth';

const authOptions: NextAuthOptions = {
  secret: appConfig.nextAuth.secret,
  debug: true,
  providers: [
    {
      id: 'shibboleth',
      name: 'Shibboleth',
      type: 'oauth',
      idToken: true,
      checks: ['pkce', 'state'],
      issuer: appConfig.shibboleth.issuerUrl,
      wellKnown: `${appConfig.shibboleth.issuerUrl}/.well-known/openid-configuration`,
      authorization: { params: { scope: appConfig.shibboleth.scope } },
      clientId: appConfig.shibboleth.clientId,
      clientSecret: appConfig.shibboleth.clientSecret,
      profile(profile, tokens): Awaitable<User> {
        return {
          id: profile.sub,
          eduPersonPrincipalName: profile.eduPersonPrincipalName,
          pairwiseId: profile.sub,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        token.eduPersonPrincipalName = user.eduPersonPrincipalName;
        token.pairwiseId = user.pairwiseId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.sub,
        eduPersonPrincipalName: token.eduPersonPrincipalName,
        pairwiseId: token.pairwiseId,
      };
      return session;
    },
  },
};

export default authOptions;
