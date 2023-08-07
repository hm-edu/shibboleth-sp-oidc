'use client';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Error = ({ error }: { error: Error & { digest?: boolean } }) => (
  <Alert severity="error">
    <AlertTitle>Sorry, irgendetwas ist schief gelaufen!</AlertTitle>
    <strong>
      `${error.name}: ${error.message}`
    </strong>
  </Alert>
);

export default Error;
