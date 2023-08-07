'use client';

import { getAuthErrorDescription } from '@/lib/errorDescription';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useSearchParams } from 'next/navigation';

const AuthErrorView = () => {
  const authError = useSearchParams().get('error');
  const authErrorDescription = getAuthErrorDescription(authError);

  return (
    <Alert severity="error">
      <AlertTitle>
        Die Anmeldung ist aufgrund eines internen Fehlers fehlgeschlagen!
      </AlertTitle>
      <strong>{authError}</strong> - {authErrorDescription}
    </Alert>
  );
};

export default AuthErrorView;
