function longestOnes(arr: [], k: number): number {
  let left = 0;
  let zeros = 0;
  let maxLen = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) zeros++;

    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
