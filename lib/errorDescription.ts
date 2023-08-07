export const getAuthErrorDescription = (error: string | null) => {
  switch (error) {
    case 'OAuthSignin':
      return 'Error in constructing an authorization URL.';
    case 'OAuthCallback':
      return 'Error in handling the response from an OAuth provider.';
    case 'OAuthCreateAccount':
      return 'Could not create OAuth provider user in the database.';
    case 'EmailCreateAccount':
      return 'Could not create email provider user in the database.';
    case 'Callback':
      return 'Error in the OAuth callback handler route.';
    case 'OAuthAccountNotLinked':
      return 'If the email on the account is already linked, but not with this OAuth account.';
    case 'EmailSignin':
      return 'Sending the e-mail with the verification token failed.';
    case 'CredentialsSignin':
      return "The authorize callback returned null in the Credentials provider. We don't recommend providing information about which part of the credentials were wrong, as it might be abused by malicious hackers.";
    case 'SessionRequired':
      return 'The content of this page requires you to be signed in at all times. See useSession for configuration.';
    case 'Configuration':
      return 'There is a problem with the server configuration. Check if your options are correct.';
    case 'AccessDenied':
      return 'Usually occurs, when you restricted access through the signIn callback, or redirect callback.';
    case 'Verification':
      return 'Related to the Email provider. The token has expired or has already been used.';
    default:
      return 'Catch all, will apply, if none of the other errors matched.';
  }
};
