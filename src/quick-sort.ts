/**
 * Sort given numbers using quick sort algorithm, AKA "Q-Sort"
 *  - Similar to merge sort: O(n log n)
 *  - Often faster than merge sort, with bad worst case scenario
 *     - For example: array is already sorted: O(n^2)
 *     - Can be helped by intelligently choosing the pivot
 */
export function quickSort(numbers: number[]): number[] {
  if (numbers.length <= 1) return numbers;

  // Get the pivot
  const pivot: number = numbers[numbers.length - 1];

  // Build left and right arrays
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < pivot) left.push(numbers[i]);
    else right.push(numbers[i]);
  }

  // Recursively sort left and right arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}
