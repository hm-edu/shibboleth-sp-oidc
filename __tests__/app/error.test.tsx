import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Error from '@/app/error';

describe('Error', () => {
  beforeEach(() => {
    render(Error());
  });

  it('should exists', () => {
    expect(screen.findByTestId('error-illustration')).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(screen.findByTestId('error-illustration')).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
