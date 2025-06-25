function isPalindrome(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome('baab'));

function isPalindrome1(str: string): boolean {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
console.log(isPalindrome1('bacb'));
