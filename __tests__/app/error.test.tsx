import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Error from '@/app/error';

const error = {
  error: {
    name: 'Error',
    message: 'Test error message',
  },
};

describe('Error', () => {
  beforeEach(() => {
    render(Error(error));
  });

  it('should exists', () => {
    expect(screen.getByRole('alert')).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(screen.getByRole('alert')).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
