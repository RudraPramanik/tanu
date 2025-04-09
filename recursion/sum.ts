function sum(n: number): number {
  if (n <= 1) return n;
  return n + sum(n - 1);
}
console.log(sum(10));
