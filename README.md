This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [NextAuth.js](https://next-auth.js.org/) and [MUI](https://mui.com/).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Shibboleth OIDC Configuration

Create a file called `.env.local` in the root of the project and add the following:

```bash
# next-auth enviroment variables
# next-auth environment variables
NEXTAUTH_SECRET="<given-secret>"
NEXTAUTH_URL="<given-base-url>"

# shibboleth oidc environment variables
SHIBBOLETH_OIDC_ISSUER_URL="<given-issuer-url>"
SHIBBOLETH_OIDC_SCOPE="<given-scope>"
SHIBBOLETH_OIDC_CLIENT_ID="<given-client-id>"
SHIBBOLETH_OIDC_CLIENT_SECRET="<given-client-secret>"
```
