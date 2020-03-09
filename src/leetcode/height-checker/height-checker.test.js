import { heightChecker } from './height-checker';

describe('[Leetcode] heightChecker', () => {
  test('example #1', () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toEqual(3);
  });

  test('example #2', () => {
    expect(heightChecker([5, 1, 2, 3, 4])).toEqual(5);
  });

  test('example #3', () => {
    expect(heightChecker([1, 2, 3, 4, 5])).toEqual(0);
  });
});
