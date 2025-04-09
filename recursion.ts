function countDown(n: number): void {
  if (n === 0) {
    return;
  }
  console.log(n);
  countDown(n - 1);
}

countDown(5);
