import { describe, it, expect, afterEach, vi } from 'vitest';
import { defineConfig } from '@/config/defineConfig';

describe('defineConfig', () => {
  it('should initialize environment variables', () => {
    vi.stubEnv('NEXTAUTH_SECRET', 'top-secret');
    vi.stubEnv('NEXTAUTH_URL', 'http://localhost:3000');
    vi.stubEnv('SHIBBOLETH_OIDC_ISSUER_URL', 'http://localhost:8080');
    vi.stubEnv('SHIBBOLETH_OIDC_SCOPE', 'openid');
    vi.stubEnv('SHIBBOLETH_OIDC_CLIENT_ID', 'client-id');
    vi.stubEnv('SHIBBOLETH_OIDC_CLIENT_SECRET', 'client-secret');

    expect(defineConfig()).toBeDefined();
    expect(defineConfig().nextAuth.secret).toEqual('top-secret');
    expect(defineConfig().nextAuth.url).toEqual('http://localhost:3000');
    expect(defineConfig().shibboleth.issuerUrl).toEqual(
      'http://localhost:8080',
    );
    expect(defineConfig().shibboleth.scope).toEqual('openid');
    expect(defineConfig().shibboleth.clientId).toEqual('client-id');
    expect(defineConfig().shibboleth.clientSecret).toEqual('client-secret');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });
});
