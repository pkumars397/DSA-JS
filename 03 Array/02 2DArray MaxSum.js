// function sum(arr) {
//   var max = 0;
//   for (var i = 0; i < arr.length; i++) {
//     var sum = 0;
//     for (var j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// }

function sum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i].reduce((acc, cur) => { return acc + cur; }));
  }
  return max;
}
var num = [
  [1, 2, 3],
  [2, 35, 4],
];
console.log(sum(num));
