import { shortestCompletingWord } from './shortest-completing-word';

describe('[Leetcode] shortestCompletingWord', () => {
  test('example #1', () => {
    expect(shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])).toBe('steps');
  });

  test('example #2', () => {
    expect(shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show'])).toBe('pest');
  });
});
