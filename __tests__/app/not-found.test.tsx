import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import NotFound from '@/app/not-found';
import { cleanup, render, screen } from '@testing-library/react';

describe('NotFound', () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  it('should exists', () => {
    expect(screen.getByRole('heading', { level: 2 })).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(screen.getByRole('heading', { level: 2 })).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
