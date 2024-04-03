import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { getServerSession } from 'next-auth';
import Navbar from '@/app/ui/navbar';

vi.mock('next-auth', () => ({
  getServerSession: vi.fn(),
}));

describe('Navbar, when user is not authenticated', () => {
  beforeEach(async () => {
    (getServerSession as Mock).mockReturnValue(null);
    render(await Navbar());
  });

  it('Logo should exists', () => {
    expect(screen.getByLabelText('HM Logo')).toBeDefined();
  });

  it('Logo should match snapshot', () => {
    expect(screen.getByLabelText('HM Logo')).toMatchSnapshot();
  });

  it('Link should exists', () => {
    expect(screen.getByRole('link')).toBeDefined();
  });

  it('Link should redirect to base url', () => {
    expect(screen.getByRole('link').getAttribute('href')).toEqual('/');
  });

  it('Link should match snapshot', () => {
    expect(screen.getByRole('link')).toMatchSnapshot();
  });

  it('Button should exists', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('Button should match snapshot', () => {
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});

describe('Navbar, when user is authenticated', () => {
  const session = {
    user: {
      id: '1',
      pairwiseId: 'pairwiseId',
    },
    expires: '2021-10-10T10:10:10.000Z',
  };

  beforeEach(async () => {
    (getServerSession as Mock).mockReturnValue(Promise.resolve(session));
    render(await Navbar());
  });

  it('Logo should exists', () => {
    expect(screen.getByLabelText('HM Logo')).toBeDefined();
  });

  it('Logo should match snapshot', () => {
    expect(screen.getByLabelText('HM Logo')).toMatchSnapshot();
  });

  it('Link should exists', () => {
    expect(screen.getByRole('link')).toBeDefined();
  });

  it('Link should redirect to base url', () => {
    expect(screen.getByRole('link').getAttribute('href')).toEqual('/');
  });

  it('Link should match snapshot', () => {
    expect(screen.getByRole('link')).toMatchSnapshot();
  });

  it('Button should exists', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('Button should match snapshot', () => {
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
