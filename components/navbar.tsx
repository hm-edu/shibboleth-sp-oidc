import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HmIcon from './icons/hmIcon';
import SignInButton from './signInButton';
import SignOutButton from './signOutButton';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HmIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            Home
          </Typography>
          {session ? <SignOutButton /> : <SignInButton />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
