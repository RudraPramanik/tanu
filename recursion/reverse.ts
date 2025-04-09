function reverse(str: string): string {
  if (str.length <= 1) return str;
  const restReversed = reverse(str.slice(1));
  console.log(`restReversed: "${restReversed}", str[0]: "${str[0]}"`);
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('hello'));
