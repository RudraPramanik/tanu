function mergeSort(arr: number[]): number[] {
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr2 = [6, 1, 5, 9, 0, 2, 7];
console.log(mergeSort(arr2));
