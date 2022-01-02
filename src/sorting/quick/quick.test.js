import { quickSort } from './quick.sort';

describe('[Sort] quick', () => {
  test('should sort array', () => {
    const unsorted = [1, 3, 5, 4, 2];
    const sorted = [1, 2, 3, 4, 5];
    expect(quickSort(unsorted)).toEqual(sorted);
  });

  test('should return already sorted array without changes', () => {
    const sorted = [1, 2, 3, 4, 5];
    expect(quickSort(sorted)).toEqual(sorted);
  });

  test('should return sorted array when array is sorted in reverse order', () => {
    const unsorted = [5, 4, 3, 2, 1];
    const sorted = [1, 2, 3, 4, 5];
    expect(quickSort(unsorted)).toEqual(sorted);
  });

  test('should return sorted array with repeated values', () => {
    const unsorted = [5, 4, 3, 7, 9, 4];
    const sorted = [3, 4, 4, 5, 7, 9];
    expect(quickSort(unsorted)).toEqual(sorted);
  });
});
