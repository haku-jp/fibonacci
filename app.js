'use strict';
const memo = new Map(); //一度計算した結果を保存することを「メモ化」という
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  //前と、前の前のフィボナッチ数を足し合わせた数
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
const length = 100;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}