declare module 'next-auth' {
  interface Session {
    user: User;
  }

  interface User {
    id: string | undefined;
    pairwiseId: string;
    eduPersonPrincipalName: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    pairwiseId: string;
    eduPersonPrincipalName: string;
  }
}

export interface ShibbolethProfile extends Record<string, any> {
  atHash: string;
  sub: string;
  aud: string;
  authTime: number;
  iss: string;
  eduPersonPrincipalName: string;
  exp: number;
  iat: number;
  sid: string;
}
