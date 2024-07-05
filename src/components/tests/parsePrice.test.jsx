import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import parsePrice from '../src/parsePrice';

test('parses valid price strings', () => {
  expect(parsePrice('$1,234.56')).toBe(1234.56);
  expect(parsePrice('$1234.56')).toBe(1234.56);
  expect(parsePrice(' $1,234.56 ')).toBe(1234.56);
  expect(parsePrice('$0.56')).toBe(0.56);
  expect(parsePrice('$1234')).toBe(1234);
});

test('throws error for strings without dollar sign', () => {
  expect(() => parsePrice('1234.56')).toThrow('String does not start with a dollar sign');
  expect(() => parsePrice('abcd')).toThrow('String does not start with a dollar sign');
});

test('throws error for invalid price formats', () => {
  expect(() => parsePrice('$abcd')).toThrow('Invalid price format');
});

test('throws error for non-string inputs', () => {
  expect(() => parsePrice(1234)).toThrow('Input must be a string');
  expect(() => parsePrice(null)).toThrow('Input must be a string');
  expect(() => parsePrice({})).toThrow('Input must be a string');
});
