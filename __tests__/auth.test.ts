import { describe, it, expect, vi, afterAll, beforeAll } from 'vitest';
import { config } from '@/auth';

describe('auth', () => {
  const mockUser = {
    id: '123',
    pairwiseId: '123',
    email: 'email',
    emailVerified: new Date(),
  };

  const mockAccount = {
    provider: '',
    providerAccountId: '',
    type: 'oauth',
  };

  const mockSession = {
    user: {
      id: '',
      pairwiseId: '',
      email: '',
      emailVerified: null,
    },
    sessionToken: '',
    userId: '',
  };

  const mockToken = {
    id: mockUser.id,
    sub: mockUser.id,
    pairwiseId: mockUser.pairwiseId,
  };

  const mockProfile = {
    sub: mockUser.id,
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

  it('verify nextAuth debug is set', () => {
    expect(config.debug).toBeTruthy();
  });

  it('verify shibboleth provider properties are correctly set', async () => {
    const shibbolethProvider = config.providers[0];
    expect(shibbolethProvider.id).toEqual('shibboleth');
    expect(shibbolethProvider.name).toEqual('Shibboleth');
    expect(shibbolethProvider.type).toEqual('oauth');

    if (shibbolethProvider.type === 'oidc') {
      expect(shibbolethProvider.issuer).toEqual('http://localhost:8080');
      expect(shibbolethProvider.clientId).toEqual('client-id');
      expect(shibbolethProvider.clientSecret).toEqual('client-secret');
      expect(shibbolethProvider.authorization).toEqual({
        params: { scope: 'openid' },
      });
      const user = shibbolethProvider.profile(mockProfile);
      expect(user.id).toEqual(mockProfile.sub);
      expect(user.pairwiseId).toEqual(mockProfile.pairwiseId);
    }
  });

  it('verify session callback', async () => {
    const session = await config.callbacks!!.session!!({
      newSession: undefined,
      trigger: 'update',
      // @ts-ignore
      session: mockSession,
      token: mockToken,
      user: mockUser,
    });

    expect(session.user.id).toEqual(mockSession.user.id);
    expect(session.user.pairwiseId).toEqual(mockSession.user.pairwiseId);
  });

  it('verify jwt callback', async () => {
    const jwt = await config.callbacks!!.jwt!!({
      token: mockToken,
      user: mockUser,
      account: null,
    });

    expect(jwt.pairwiseId).toEqual(mockSession.user.pairwiseId);
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });
});
