function lengthOfSubj(arr: []): number {
  let left = 0;
  let maxLength = 0;
  const seen = new Set<string>();
  for (let right = 0; right < arr.length; right++) {
    while (seen.has(arr[right])) {
      seen.delete(arr[left]);
      left++;
    }
    seen.add(arr[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
