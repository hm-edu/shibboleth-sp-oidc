This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [NextAuth.js](https://next-auth.js.org/) and [MUI](https://mui.com/).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This projects also checks the quality of the code with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). Also, the quality of the code is checked with [TypeScript](https://www.typescriptlang.org/). The CI/CD is done within GitLab with appropriate steps: `build`, `lint`, `prettier:check` and `containerize`.

To run the linter:

```bash
pnpm lint
pnpm prettier:check
```

## Shibboleth OIDC Configuration

Create a file called `.env.local` in the root of the project and add the following:

```bash
# shibboleth oidc environment variables
SHIBBOLETH_OIDC_USER_INFO_URL=
SHIBBOLETH_OIDC_CONFIGURATION_URL=
SHIBBOLETH_OIDC_SCOPE=
SHIBBOLETH_OIDC_CLIENT_ID=
SHIBBOLETH_OIDC_CLIENT_SECRET=

# next-auth environment variables
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```
