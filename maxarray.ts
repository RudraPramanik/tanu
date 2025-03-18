function maxSubArray(nums: number[]): number {
  let maxSum = nums[0]; // Store max subarray sum
  let currentSum = nums[0]; // Current subarray sum

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
