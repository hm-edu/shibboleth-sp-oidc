import Typography from '@mui/material/Typography';
import HmLogo from '@/components/icons/hmLogo';
import { getServerSession } from 'next-auth/next';
import authOptions from '@/lib/authOptions';

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <HmLogo sx={{ height: '15em', width: 'auto' }} />
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        OIDC Service-Provider Demo with Next.js
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        {session ? (
          `Welcome ${session.user?.name}! Your email address is ${session.user?.email}`
        ) : (
          <></>
        )}
      </Typography>
    </>
  );
};

export default Home;
