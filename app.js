'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  //前と、前の前のフィボナッチ数を足し合わせた数
  return fib(n - 1) + fib(n - 2);
}
const length = 100;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}