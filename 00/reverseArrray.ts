function reverseArr1(arr: number[]): number[] {
  return [...arr].reverse();
}

function reverse(arr: number[]): number[] {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
