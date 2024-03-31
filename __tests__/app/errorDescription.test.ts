import { describe, it, expect } from 'vitest';
import { getAuthErrorDescription } from '@/app/errorDescription';

describe('errorDescription', () => {
  it('OAuthSignin should return value', () => {
    expect(getAuthErrorDescription('OAuthSignin')).toEqual(
      'Error in constructing an authorization URL.',
    );
  });

  it('OAuthCallback should return value', () => {
    expect(getAuthErrorDescription('OAuthCallback')).toEqual(
      'Error in handling the response from an OAuth provider.',
    );
  });

  it('OAuthCreateAccount should return value', () => {
    expect(getAuthErrorDescription('OAuthCreateAccount')).toEqual(
      'Could not create OAuth provider user in the database.',
    );
  });

  it('EmailCreateAccount should return value', () => {
    expect(getAuthErrorDescription('EmailCreateAccount')).toEqual(
      'Could not create email provider user in the database.',
    );
  });

  it('Callback should return value', () => {
    expect(getAuthErrorDescription('Callback')).toEqual(
      'Error in the OAuth callback handler route.',
    );
  });

  it('OAuthAccountNotLinked should return value', () => {
    expect(getAuthErrorDescription('OAuthAccountNotLinked')).toEqual(
      'If the email on the account is already linked, but not with this OAuth account.',
    );
  });

  it('EmailSignin should return value', () => {
    expect(getAuthErrorDescription('EmailSignin')).toEqual(
      'Sending the e-mail with the verification token failed.',
    );
  });

  it('CredentialsSignin should return value', () => {
    expect(getAuthErrorDescription('CredentialsSignin')).toEqual(
      "The authorize callback returned null in the Credentials provider. We don't recommend providing information about which part of the credentials were wrong, as it might be abused by malicious hackers.",
    );
  });

  it('SessionRequired should return value', () => {
    expect(getAuthErrorDescription('SessionRequired')).toEqual(
      'The content of this page requires you to be signed in at all times. See useSession for configuration.',
    );
  });

  it('Configuration should return value', () => {
    expect(getAuthErrorDescription('Configuration')).toEqual(
      'There is a problem with the server configuration. Check if your options are correct.',
    );
  });

  it('AccessDenied should return value', () => {
    expect(getAuthErrorDescription('AccessDenied')).toEqual(
      'Usually occurs, when you restricted access through the signIn callback, or redirect callback.',
    );
  });

  it('Verification should return value', () => {
    expect(getAuthErrorDescription('Verification')).toEqual(
      'Related to the Email provider. The token has expired or has already been used.',
    );
  });

  it('default should return value', () => {
    expect(getAuthErrorDescription('')).toEqual(
      'Catch all, will apply, if none of the other errors matched.',
    );
  });

  it('default should return value', () => {
    expect(getAuthErrorDescription(null)).toEqual(
      'Catch all, will apply, if none of the other errors matched.',
    );
  });
});
