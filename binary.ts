function binarySearch(arr: number[], target: number): number {
  let array = arr.sort((a, b) => a - b);
  let high = array.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (target > array[mid]) {
      low = mid + 1;
    } else if (target < array[mid]) {
      high = mid - 1;
    }
  }
  return -1;
}
