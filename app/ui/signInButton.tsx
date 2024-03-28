'use client';

import { Button } from '@mui/material';
import { signIn, signOut } from 'next-auth/react';

const SignInButton = () => {
  const handleSignIn = () => {
    signIn('shibboleth').catch((error) =>
      console.error(`signIn error: ${error}`),
    );
  };

  return (
    <Button color="inherit" variant="outlined" onClick={handleSignIn}>
      Anmelden
    </Button>
  );
};

export default SignInButton;
