export const getAuthErrorDescription = (error: string | null) => {
  switch (error) {
    case 'Configuration':
      return 'There is a problem with the server configuration. Check if your options are correct.';
    case 'AccessDenied':
      return 'Usually occurs, when you restricted access through the signIn callback, or redirect callback.';
    case 'Verification':
      return 'Related to the Email provider. The token has expired or has already been used.';
    default:
      return 'Catch all, will apply, if none of the above matched.';
  }
};
