import { describe, it, expect } from 'vitest';
import { getAuthErrorDescription } from '@/app/errorDescription';

describe('errorDescription', () => {
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

  it('Default should return value', () => {
    expect(getAuthErrorDescription('EmailCreateAccount')).toEqual(
      'Catch all, will apply, if none of the above matched.',
    );
  });

  it('default should return value', () => {
    expect(getAuthErrorDescription(null)).toEqual(
      'Catch all, will apply, if none of the above matched.',
    );
  });
});
