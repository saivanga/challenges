let fibo = [0, 1];

num = 10;

while (fibo.length <= num - 1) {
  fibo.push(fibo.length - 2 + fibo.length - 1);
}

console.log(fibo);
