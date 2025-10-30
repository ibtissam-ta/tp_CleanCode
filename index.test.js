import { describe, it, expect } from 'vitest';
import { test } from './index.js';

describe('Roman number converter', () => {
  it.each(
    [
        ["I",1],
        ["II",2],
        ["III",3]
        ["X",10],
    ]) ("should return %s given %s", (expected, input) => {
        expect(test(input)).toBe(expected);
    });
});
