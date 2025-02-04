import { Typography } from '@mui/material';
import HmLogoWithText from '@/app/ui/icons/hmLogoWithText';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/authOptions';

const Secure = async () => {
  const session = await getServerSession(authOptions);

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
          Your eduPersonPrincipalName is{' '}
          <samp>{session.user?.eduPersonPrincipalName}</samp>
        </Typography>
      ) : (
        <></>
      )}
    </>
  );
};

export default Secure;
