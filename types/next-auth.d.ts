declare module 'next-auth' {
  interface User {
    id: string;
    pairwiseId: string;
  }
  interface Account {}
  interface Session {}
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    sub: string;
    pairwiseId: string;
  }
}
