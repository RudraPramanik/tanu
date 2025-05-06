function longestOnes(arr: [], k: number): number {
  let zeros = 0;
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) zeros++;

    while (zeros > k) {
      if (arr[left] === 0) left--;
      zeros++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
