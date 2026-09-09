import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SignOutButton from '@/app/ui/signOutButton';

const { mockedSignOut } = vi.hoisted(() => {
  return { mockedSignOut: vi.fn(() => Promise.resolve()) };
});

vi.mock('next-auth/react', () => {
  return { signOut: mockedSignOut };
});

describe('SignOutButton', () => {
  beforeEach(() => {
    mockedSignOut.mockClear();
    render(SignOutButton());
  });

  it('should exists', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('should trigger signOut function', () => {
    fireEvent.click(screen.getByText(/Abmelden/));
    expect(mockedSignOut).toHaveBeenCalledOnce();
  });

  afterEach(() => {
    cleanup();
  });
});
