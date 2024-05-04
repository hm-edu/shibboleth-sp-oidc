import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import AuthErrorView from '@/app/ui/authErrorView';

describe('AuthErrorView', () => {
  beforeEach(() => {
    vi.mock('next/navigation', () => {
      return {
        useSearchParams: vi.fn(() => {
          return { get: vi.fn(() => 'AuthError') };
        }),
      };
    });

    vi.mock('@/app/errorDescription', () => {
      return {
        getAuthErrorDescription: vi.fn(() => 'AuthErrorDescription'),
      };
    });

    render(<AuthErrorView />);
  });

  it('should exists', () => {
    expect(screen.getByRole('alert')).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(screen.getByRole('alert')).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
