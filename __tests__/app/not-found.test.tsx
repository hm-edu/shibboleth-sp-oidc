import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import NotFound from '@/app/not-found';
import { cleanup, render, screen } from '@testing-library/react';

describe('NotFound', () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  it('should exists', () => {
    expect(screen.findByTestId('not-found-illustration')).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(screen.findByTestId('not-found-illustration')).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
