import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SignInButton from '@/app/ui/signInButton';

const { mockedSignIn } = vi.hoisted(() => {
  return { mockedSignIn: vi.fn(() => Promise.resolve()) };
});

vi.mock('next-auth/react', () => {
  return { signIn: mockedSignIn };
});

describe('SignInButton', () => {
  beforeEach(() => {
    mockedSignIn.mockClear();
    render(SignInButton());
  });

  it('should exists', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should show sign in text', () => {
    expect(screen.getByRole('button').textContent).toEqual('Anmelden');
  });

  it('should trigger signOut function', () => {
    fireEvent.click(screen.getByText(/Anmelden/));
    expect(mockedSignIn).toHaveBeenCalledOnce();
  });

  afterEach(() => {
    cleanup();
  });
});
