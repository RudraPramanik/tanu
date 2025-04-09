function fibo(n) {
    if (n <= 1)
        return n;
    return n * fibo(n - 1) + (n - 2);
}
console.log(fibo(7));
