declare module 'next-auth' {
  interface Session {
    user: User;
  }

  interface User {
    id: string | undefined;
    eduPersonPrincipalName: string;
    pairwiseId: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    eduPersonPrincipalName: string;
    pairwiseId: string;
  }
}

export interface ShibbolethProfile extends Record<string, any> {
  atHash: string;
  sub: string;
  aud: string;
  authTime: number;
  iss: string;
  exp: number;
  iat: number;
  sid: string;
}
