function majority(n: number[]): number {
  let arr = n.length;

  for (let i = 0; i < arr; i++) {
    let count = 0;
    for (let j = 0; j < arr; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count > Math.floor(arr / 2)) {
      return i;
    }
  }
  return -1;
}

const arr: number[] = [3, 3, 4, 3, 2, 3, 3];
console.log(majority(arr));
