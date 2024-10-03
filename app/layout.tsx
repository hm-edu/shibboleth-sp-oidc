import { Metadata, Viewport } from 'next';
import { Box, Container } from '@mui/material';
import ButtonAppBar from '@/app/ui/navbar';
import NextAuthProvider from './context/NextAuthProvider';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from '@/app/theme';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Shibboleth OIDC PoC',
  description: 'Shibboleth OIDC PoC',
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
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                textAlign="center"
              >
                <Container sx={{ padding: 2, flexGrow: 1 }}>
                  {children}
                </Container>
              </Box>
            </NextAuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
