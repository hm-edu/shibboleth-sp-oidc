'use client';

import { getAuthErrorDescription } from '@/app/errorDescription';
import { Alert, AlertTitle } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const AuthErrorView = () => (
  <Alert severity="error">
    <AlertTitle>
      Die Anmeldung ist aufgrund eines internen Fehlers fehlgeschlagen!
    </AlertTitle>
    <Suspense>
      <Search />
    </Suspense>
  </Alert>
);

const Search = () => {
  const authError = useSearchParams().get('error');
  const authErrorDescription = getAuthErrorDescription(authError);

  return (
    <strong>
      {authError} - {authErrorDescription}
    </strong>
  );
};

export default AuthErrorView;
