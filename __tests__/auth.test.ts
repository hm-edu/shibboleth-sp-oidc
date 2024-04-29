import { describe, it, expect, vi, afterAll, beforeAll } from 'vitest';
import { config } from '@/auth';

describe('authOptions', () => {
  const mockUser = {
    id: '123',
    email: '',
    emailVerified: null,
    pairwiseId: '123',
  };

  const mockSession = {
    user: {
      id: '',
      pairwiseId: '',
      email: '',
      emailVerified: null,
    },
    sessionToken: '',
    expires: new Date(),
    userId: '',
  };

  const mockToken = {
    pairwiseId: mockUser.pairwiseId,
  };

  const mockProfile = {
    pairwiseId: mockUser.pairwiseId,
  };

  beforeAll(() => {
    vi.mock('@/config', () => {
      return {
        appConfig: {
          nextAuth: {
            debug: 'true',
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

  it('verify debug option is correctly set', async () => {
    expect(config.debug).toBeTruthy();
  });

  it('verify shibboleth provider properties are correctly set', async () => {
    const shibbolethProvider = config.providers[0];
    expect(shibbolethProvider.id).toEqual('shibboleth');
    expect(shibbolethProvider.name).toEqual('Shibboleth');
    expect(shibbolethProvider.type).toEqual('oidc');

    if (shibbolethProvider.type === 'oidc') {
      expect(shibbolethProvider.issuer).toEqual('http://localhost:8080');
      expect(shibbolethProvider.authorization).toEqual({
        params: { scope: 'openid' },
      });
      expect(shibbolethProvider.clientId).toEqual('client-id');
      expect(shibbolethProvider.clientSecret).toEqual('client-secret');

      const user = shibbolethProvider.profile(mockProfile);
      expect(user.id).toEqual(mockProfile.sub);
      expect(user.pairwiseId).toEqual(mockProfile.pairwiseId);
    }
  });

  it('verify session callback', async () => {
    const session = await config.callbacks!!.session!!({
      newSession: undefined,
      trigger: 'update',
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
