import { AppConfig } from './type';

export const defineConfig = (): AppConfig => {
  return {
    nextAuth: {
      secret: loadString(process.env.NEXTAUTH_SECRET),
      url: loadString(process.env.NEXTAUTH_URL),
    },
    shibboleth: {
      issuerUrl: loadString(process.env.SHIBBOLETH_OIDC_ISSUER_URL),
      scope: loadString(process.env.SHIBBOLETH_OIDC_SCOPE),
      clientId: loadString(process.env.SHIBBOLETH_OIDC_CLIENT_ID),
      clientSecret: loadString(process.env.SHIBBOLETH_OIDC_CLIENT_SECRET),
    },
  };
};

const loadString = (env: string | undefined): string => {
  if (env == undefined) return `Environment variable ${env} was not set`;
  return env;
};
