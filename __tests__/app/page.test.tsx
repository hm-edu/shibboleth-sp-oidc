import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Page from '../../app/page';
import { getServerSession } from 'next-auth';

vi.mock('next-auth', () => ({
  getServerSession: vi.fn(),
}));

describe('Home, when user is not authenticated', () => {
  beforeEach(async () => {
    (getServerSession as Mock).mockReturnValue(null);
    render(await Page());
  });

  it('Logo should exists', () => {
    expect(screen.getByLabelText('HM Logo')).toBeDefined();
  });

  it('Logo should match snapshot', () => {
    expect(screen.getByLabelText('HM Logo')).toMatchSnapshot();
  });

  it('Header should exists', () => {
    expect(screen.getByRole('heading', { level: 2 })).toBeDefined();
  });

  it('Header should match snapshot', () => {
    expect(screen.getByRole('heading', { level: 2 })).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});

describe('Home, when user is authenticated', () => {
  const session = {
    user: {
      id: '1',
      pairwiseId: 'pairwiseId',
    },
    expires: '2021-10-10T10:10:10.000Z',
  };

  beforeEach(async () => {
    (getServerSession as Mock).mockReturnValue(Promise.resolve(session));
    render(await Page());
  });

  it('Logo should exists', () => {
    expect(screen.getByLabelText('HM Logo')).toBeDefined();
  });

  it('Logo should match snapshot', () => {
    expect(screen.getByLabelText('HM Logo')).toMatchSnapshot();
  });

  it('Header should exists', () => {
    expect(screen.getByRole('heading', { level: 2 })).toBeDefined();
  });

  it('Header should match snapshot', () => {
    expect(screen.getByRole('heading', { level: 2 })).toMatchSnapshot();
  });

  it('Subheader should exists', () => {
    expect(screen.getByRole('heading', { level: 5 })).toBeDefined();
  });

  it('Subheader should match snapshot', () => {
    expect(screen.getByRole('heading', { level: 5 })).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
