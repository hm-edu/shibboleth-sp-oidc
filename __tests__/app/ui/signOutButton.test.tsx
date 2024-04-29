import { test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import SignOutButton from '@/app/ui/signOutButton';

test('SignOutButton', () => {
  vi.mock('@/auth', () => {
    return { signOut: vi.fn(() => Promise.resolve()) };
  });
  render(<SignOutButton />);
  expect(screen.getByRole('button')).toBeDefined();
  expect(screen.getByRole('button')).toMatchSnapshot();
  fireEvent.click(screen.getByText(/Abmelden/));
});
