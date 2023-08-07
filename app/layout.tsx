import './globals.css';
import { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonAppBar from '@/components/navbar';
import NextAuthProvider from './context/NextAuthProvider';

export const metadata: Metadata = {
  title: 'OIDC Service-Provider Demo with Next.js',
  description: 'OIDC Service-Provider Demo with Next.js',
  viewport: 'content="initial-scale=1, width=device-width',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <ButtonAppBar />
          <Container
            sx={{ paddingTop: '10px', paddingBottom: '10px' }}
            maxWidth="xl"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              sx={{ height: '100vh' }}
            >
              {children}
            </Box>
          </Container>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
