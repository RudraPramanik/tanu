function quickSort(arr: number[], low = 0, high = arr.length - 1): number[] {
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, low, high);

    // Recursively sort elements before and after partition
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high]; // Choosing the last element as pivot
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Final pivot swap
  return i + 1;
}

// ✅ Test it
const arr = [10, 80, 30, 90, 40, 50, 70];
console.log('Sorted:', quickSort(arr));
