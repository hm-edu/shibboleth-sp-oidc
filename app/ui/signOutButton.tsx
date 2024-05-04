import { Button } from '@mui/material';
import { signOut } from '@/auth';

const SignOutButton = () => {
  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  return (
    <form action={handleSignOut}>
      <Button type="submit" color="inherit" variant="outlined">
        Abmelden
      </Button>
    </form>
  );
};

export default SignOutButton;
