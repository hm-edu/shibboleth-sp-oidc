import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SignInButton from '@/app/ui/signInButton';

describe('SignInButton', () => {
  beforeEach(() => {
    render(SignInButton());
  });

  it('should exists', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should trigger signOut function', () => {
    const { mockedSignIn } = vi.hoisted(() => {
      return { mockedSignIn: vi.fn(() => Promise.resolve()) };
    });
    vi.mock('next-auth/react', () => {
      return { signIn: mockedSignIn };
    });

    fireEvent.click(screen.getByText(/Anmelden/));
    expect(mockedSignIn).toHaveBeenCalledOnce();
  });

  afterEach(() => {
    cleanup();
  });
});
