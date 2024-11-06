const numberOfTerms = 10;
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < numberOfTerms; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}