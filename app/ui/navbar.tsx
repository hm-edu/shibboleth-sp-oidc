import { AppBar, Box, Link, Toolbar } from '@mui/material';
import SignInButton from './signInButton';
import SignOutButton from './signOutButton';
import HmLogo from '@/app/ui/icons/hmLogo';
import { auth } from '@/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <HmLogo aria-label="HM Logo" sx={{ width: 64, height: 64 }} />
          <Box sx={{ flexGrow: 1 }} />
          <Link variant="h5" color="inherit" underline="none" href="/">
            Shibboleth OIDC PoC
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {session ? <SignOutButton /> : <SignInButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
