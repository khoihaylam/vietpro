// var array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// array[0] = "html";
// array[1] = "css";
// array[2] = true;
// array[1] = 3.14;
// console.log(array);
// // c2:
// var arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(arr1[0]);
// for (x in arr1) {
//   console.log(arr1[x]);
// }
function caculator(a, c, b) {
  switch (c) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
let a = Number(prompt("nhap a"));
let c = prompt("nhap c");
let b = Number(prompt("nhap b"));
alert(`${a} ${c} ${b} =${caculator(a, c, b)}`);
