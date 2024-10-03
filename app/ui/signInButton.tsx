import { Button } from '@mui/material';
import { signIn } from '@/auth';

const SignInButton = () => {
  const handleSignIn = async () => {
    'use server';
    await signIn('shibboleth');
  };

  return (
    <form action={handleSignIn}>
      <Button type="submit" color="inherit" variant="outlined">
        Anmelden
      </Button>
    </form>
  );
};

export default SignInButton;
