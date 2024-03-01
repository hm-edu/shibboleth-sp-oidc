import { Awaitable, NextAuthOptions, Profile, User } from 'next-auth';

const getUserInfo = (userInfoUrl: string, accessToken: string) =>
  fetch(userInfoUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch user info with status=${response.status}`,
        );
      }
      return response.json();
    })
    .then((json) => {
      return {
        id: json.sub,
        name: json.name,
        email: json.email,
      };
    });

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    {
      id: 'shibboleth',
      name: 'Shibboleth',
      type: 'oauth',
      wellKnown: process.env.SHIBBOLETH_OIDC_CONFIGURATION_URL,
      clientId: process.env.SHIBBOLETH_OIDC_CLIENT_ID,
      clientSecret: process.env.SHIBBOLETH_OIDC_CLIENT_SECRET,
      authorization: {
        params: {
          scope: process.env.SHIBBOELTH_OIDC_SCOPE,
        },
      },
      idToken: true,
      userinfo: {
        url: process.env.SHIBBOLETH_OIDC_USER_INFO_URL,
        async request(context): Promise<Profile> {
          if (
            process.env.SHIBBOLETH_OIDC_USER_INFO_URL &&
            context.tokens.access_token
          ) {
            return getUserInfo(
              process.env.SHIBBOLETH_OIDC_USER_INFO_URL,
              context.tokens.access_token,
            );
          }
          throw new Error('Failed to fetch user info');
        },
      },
      profile(profile): Awaitable<User> {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        token.name = user.name;
        token.email = user.email;
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        name: token.name,
        email: token.email,
      };

      return session;
    },
  },
};

export default authOptions;
