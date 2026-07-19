import { describe, test, expect } from 'bun:test';
import { mock } from 'bun:test';

// Mock the serve function to prevent actual server startup
mock.module('bun', () => ({
  serve: mock(() => ({ url: 'http://localhost:3000' })),
}));

// Now import will work without starting server
import './index';

describe('smoke test', () => {
  test('basic assertion', () => {
    expect(true).toBe(true);
  });
});
