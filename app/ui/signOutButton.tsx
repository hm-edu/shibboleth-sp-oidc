'use client';

import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut().catch((error) => console.error(`signOut error: ${error}`));
  };

  return (
    <Button color="inherit" variant="outlined" onClick={handleSignOut}>
      Abmelden
    </Button>
  );
};

export default SignOutButton;
