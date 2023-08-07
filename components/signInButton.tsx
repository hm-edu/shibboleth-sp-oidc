'use client';

import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';

const SignInButton = () => {
  const handleSignIn = () => {
    signIn('shibboleth');
  };

  return (
    <Button color="inherit" variant="outlined" onClick={handleSignIn}>
      Anmelden
    </Button>
  );
};

export default SignInButton;
