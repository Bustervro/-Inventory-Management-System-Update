const duplicateZeros = require('./duplicateZeros');

describe('duplicateZeros - normal cases', () => {
  test('duplicates zeros in mixed array', () => {
    const inventory = [4, 0, 1, 3, 0, 2, 5, 0];
    duplicateZeros(inventory);
    expect(inventory).toEqual([4, 0, 0, 1, 3, 0, 0, 2]);
  });

  test('array with one zero in the middle', () => {
    const inventory = [1, 2, 0, 3, 4];
    duplicateZeros(inventory);
    expect(inventory).toEqual([1, 2, 0, 0, 3]);
  });

  test('multiple zeros separated by numbers', () => {
    const inventory = [8, 0, 6, 0, 7];
    duplicateZeros(inventory);
    expect(inventory).toEqual([8, 0, 0, 6, 0]);
  });
});

describe('duplicateZeros - edge cases', () => {
  test('no zeros', () => {
    const inventory = [3, 2, 1];
    duplicateZeros(inventory);
    expect(inventory).toEqual([3, 2, 1]);
  });

  test('empty array', () => {
    const inventory = [];
    duplicateZeros(inventory);
    expect(inventory).toEqual([]);
  });

  test('all zeros', () => {
    const inventory = [0, 0, 0, 0];
    duplicateZeros(inventory);
    expect(inventory).toEqual([0, 0, 0, 0]);
  });

  test('single zero', () => {
    const inventory = [0];
    duplicateZeros(inventory);
    expect(inventory).toEqual([0]);
  });

  test('zero at the last duplicable boundary', () => {
    const inventory = [1, 2, 3, 0];
    duplicateZeros(inventory);
    expect(inventory).toEqual([1, 2, 3, 0]);
  });

  test('zero at front', () => {
    const inventory = [0, 1, 2, 3];
    duplicateZeros(inventory);
    expect(inventory).toEqual([0, 0, 1, 2]);
  });
});
