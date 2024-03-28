import { AppBar, Button, Box, Toolbar, Typography } from '@mui/material';
import SignInButton from './signInButton';
import SignOutButton from './signOutButton';
import HmLogo from '@/app/ui/icons/hmLogo';
import authOptions from '@/app/authOptions';
import { getServerSession } from 'next-auth';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <HmLogo />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              margin: 1,
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Accounting-Portal
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {session ? <SignOutButton /> : <SignInButton />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
