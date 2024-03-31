import { describe, it, expect } from 'vitest';
import theme from '@/app/theme';

describe('theme', () => {
  it('verify hm theme', () => {
    expect(theme.palette.mode).toEqual('light');
    expect(theme.palette.primary.main).toEqual('#FC5555');
    expect(theme.palette.secondary.main).toEqual('#4AD386');
  });
});
