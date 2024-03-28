export type AppConfig = {
  nextAuth: NextAuth;
  shibboleth: Shibboleth;
};

export type NextAuth = {
  url: string;
  secret: string;
};

export type Shibboleth = {
  issuerUrl: string;
  scope: string;
  clientId: string;
  clientSecret: string;
};
