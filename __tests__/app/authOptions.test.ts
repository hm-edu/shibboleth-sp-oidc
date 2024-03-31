import { describe, it, expect, vi, afterAll, beforeAll } from 'vitest';
import authOptions from '@/app/authOptions';
import { JWT } from 'next-auth/jwt';
import { Account, Session } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';

describe('authOptions', () => {
  const mockUser: AdapterUser = {
    id: '123',
    eduPersonPrincipalName: 'eduPersonPrincipalName',
    pairwiseId: '123',
    email: 'email',
    emailVerified: new Date(),
  };

  const mockAccount: Account = {
    provider: '',
    providerAccountId: '',
    type: 'oauth',
  };

  const mockSession: Session = {
    user: mockUser,
    expires: new Date().toString(),
  };

  const mockToken: JWT = {
    id: mockUser.id,
    sub: mockUser.id,
    eduPersonPrincipalName: mockUser.eduPersonPrincipalName,
    pairwiseId: mockUser.pairwiseId,
  };

  const mockProfile = {
    sub: mockUser.id,
    eduPersonPrincipalName: mockUser.eduPersonPrincipalName,
    pairwiseId: mockUser.pairwiseId,
  };

  beforeAll(() => {
    vi.mock('@/config', () => {
      return {
        appConfig: {
          nextAuth: {
            secret: 'top-secret',
          },
          shibboleth: {
            issuerUrl: 'http://localhost:8080',
            scope: 'openid',
            clientId: 'client-id',
            clientSecret: 'client-secret',
          },
        },
      };
    });
  });

  it('verify nextAuth secret is set', () => {
    expect(authOptions.secret).toEqual('top-secret');
  });

  it('verify shibboleth provider properties are correctly set', async () => {
    const shibbolethProvider = authOptions.providers[0];
    expect(shibbolethProvider.id).toEqual('shibboleth');
    expect(shibbolethProvider.name).toEqual('Shibboleth');
    expect(shibbolethProvider.type).toEqual('oauth');

    if (shibbolethProvider.type === 'oauth') {
      expect(shibbolethProvider.idToken).toBeTruthy();
      expect(shibbolethProvider.checks).toEqual(['pkce', 'state']);
      expect(shibbolethProvider.issuer).toEqual('http://localhost:8080');
      expect(shibbolethProvider.wellKnown).toEqual(
        'http://localhost:8080/.well-known/openid-configuration',
      );
      expect(shibbolethProvider.authorization).toEqual({
        params: { scope: 'openid' },
      });
      expect(shibbolethProvider.clientId).toEqual('client-id');
      expect(shibbolethProvider.clientSecret).toEqual('client-secret');

      const user = await shibbolethProvider.profile(mockProfile, {});
      expect(user.id).toEqual(mockProfile.sub);
      expect(user.eduPersonPrincipalName).toEqual(
        mockProfile.eduPersonPrincipalName,
      );
      expect(user.pairwiseId).toEqual(mockProfile.pairwiseId);
    }
  });

  it('verify session callback', async () => {
    const session = (await authOptions.callbacks!!.session!!({
      newSession: undefined,
      trigger: 'update',
      session: mockSession,
      token: mockToken,
      user: mockUser,
    })) as Session;

    expect(session.user.id).toEqual(mockSession.user.id);
    expect(session.user.eduPersonPrincipalName).toEqual(
      mockSession.user.eduPersonPrincipalName,
    );
    expect(session.user.pairwiseId).toEqual(mockSession.user.pairwiseId);
  });

  it('verify jwt callback', async () => {
    const jwt = await authOptions.callbacks!!.jwt!!({
      token: mockToken,
      user: mockUser,
      account: mockAccount,
    });

    expect(jwt.eduPersonPrincipalName).toEqual(
      mockSession.user.eduPersonPrincipalName,
    );
    expect(jwt.pairwiseId).toEqual(mockSession.user.pairwiseId);
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });
});
