import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

import { distanceApart, distanceSimilarity } from './day-01';

const input = fs.readFileSync(path.join(__dirname, './day-01-input.txt'), 'utf-8');

describe('Day 01', () => {
  const exampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

  describe('distanceApart()', () => {
    it('should return the correct "distance" for example input', () => {
      expect(distanceApart(input)).toBe(1666427);
    });

    it('should return the correct "distance" for real input', () => {
      expect(distanceApart(input)).toBe(1666427);
    });
  });

  describe('distanceSimilarity()', () => {
    it('should return the correct "similarity" example input', () => {
      expect(distanceSimilarity(exampleInput)).toBe(31);
    });

    it('should return the correct "similarity" real input', () => {
      expect(distanceSimilarity(input)).toBe(24316233);
    });
  });
});
