function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // target found
        } else if (arr[mid] < target) {
            low = mid + 1; // search right half
        } else {
            high = mid - 1; // search left half
        }
    }

    return -1; // target not found
}
