import { expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import SignInButton from '@/app/ui/signInButton';

test('SignInButton', () => {
  vi.mock('@/auth', () => {
    return { signIn: vi.fn(() => Promise.resolve()) };
  });
  render(<SignInButton />);
  expect(screen.getByRole('button')).toBeDefined();
  expect(screen.getByRole('button')).toMatchSnapshot();
  fireEvent.click(screen.getByText(/Anmelden/));
});
