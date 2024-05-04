import { Typography } from '@mui/material';
import HmLogoWithText from '@/app/ui/icons/hmLogoWithText';
import { auth } from '@/auth';

const Home = async () => {
  const session = await auth();

  return (
    <>
      <HmLogoWithText
        aria-label="HM Logo"
        sx={{ height: 'auto', width: 'auto' }}
      />
      <Typography variant="h2" textAlign="center">
        OIDC Service-Provider Demo with Next.js
      </Typography>
      {session?.user.pairwiseId ? (
        <Typography variant="h5" textAlign="center">
          Welcome! Your pairwiseId is <samp>{session.user?.pairwiseId}</samp>
        </Typography>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
