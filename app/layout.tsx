import { Metadata, Viewport } from 'next';
import { Box, Container } from '@mui/material';
import ButtonAppBar from '@/app/ui/navbar';
import NextAuthProvider from './context/NextAuthProvider';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from '@/app/theme';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'OIDC Service-Provider Demo with Next.js',
  description: 'OIDC Service-Provider Demo with Next.js',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
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
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
