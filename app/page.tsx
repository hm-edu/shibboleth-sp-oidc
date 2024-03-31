import { Typography } from '@mui/material';
import HmLogoWithText from '@/app/ui/icons/hmLogoWithText';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/authOptions';

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <HmLogoWithText
        aria-label="HM Logo"
        sx={{ height: '15em', width: 'auto' }}
      />
      <Typography variant="h2" textAlign="center">
        OIDC Service-Provider Demo with Next.js
      </Typography>
      {session?.user.eduPersonPrincipalName && session.user.pairwiseId ? (
        <Typography variant="h5" textAlign="center">
          Welcome <samp>{session.user?.eduPersonPrincipalName}</samp>{' '}
          (eduPersonPrincipalName)! Your pairwiseId is{' '}
          <samp>{session.user?.pairwiseId}</samp>
        </Typography>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
