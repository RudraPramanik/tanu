function mergeSort(arr: number[]): number[] {
  // Base case: 1 or 0 elements
  if (arr.length <= 1) return arr;

  // Step 1: Split
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Step 2: Merge sorted halves
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  // Step 3: Compare and merge
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Step 4: Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test it
const array = [5, 2, 4, 1, 3];
console.log('Sorted:', mergeSort(array));
