let fibo = [0, 1];

num = 10;

while (fibo.length <= num - 1) {
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
}

console.log(fibo);
