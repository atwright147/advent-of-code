import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

import { day1 } from './day-01';

const input = fs.readFileSync(path.join(__dirname, './day-01-input.txt'), 'utf-8');

describe('day-01', () => {
  it('should return the correct "distance"', () => {
    expect(day1(input)).toBe(1666427);
  });
});
