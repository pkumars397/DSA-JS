// var s = "adb32dj2c";

// console.log(extract_number(s));
// function extract_number(s) {
//   var a = [];
//   for (var i = 0; i < s.length; ) {
//     if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//       var j = i;
//       while (j < s.length && s.charCodeAt(j) >= 48 && s.charCodeAt(j) <= 57) {
//         j++;
//       }
//       a.push(parseInt(s.slice(i, j)));
//       i = j;
//     } else {
//       i++;
//     }
//   }
//   return a;
// }

// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// console.log(sort(arr))
// function sort(arr) {
//     var b = [];
//     for (var j = 0; j< arr.length; j++){

//         var coun = 0;
//         for (var i = 0; i < 32; i++){
//             if ( arr[j]>> i & 1===1) {
//                 coun++;
//             }
//         }
//         b.push(coun)

//     }

//     for (var i = 0; i < arr.length - 1; i++){
//         for (var j = 0; j < arr.length - 1 - i; j++){
//             if (b[j]>b[j+1] || (b[j]==b[j+1] && arr[j]>arr[j+1])) {
//                 [b[j], b[j + 1]] = [b[j + 1], b[j]];
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr
// }

// var arr = [1, -1, 3, 2, -7, -5, 11, 6]
// console.log(sort(arr))
// function sort() {
//     var e = 0;
//     var l = 0;
//     var r = arr.length - 1;
//     while (l < r) {
//         while (l < r && arr[l] >= 0) {
//             l++;
//         }
//         while (l < r && arr[r] < 0) {
//             r--
//         }

//         if(l<r)
//         [arr[l], arr[r]] = [arr[r], arr[l]]
//         l++;
//         r--;

//     }
//     return arr;
// }

// var a = "hey"
// console.log(a.split(''))

// number to HexaDeci

// /
// console.log(Hex(n))
// function Hex(n) {
//     // Part 1 storing absolute remainder into the array;
//     var a = [];
//     while (n > 0) {
//         a.push(n % 16);
//         n = Math.floor(n / 16);
//     }
//     for (var i = a.length; i <= 7; i++) {
//         a.push(0)
//     }

//     var i = 0;
//     while (i < 8 && a[i] == 0) {
//         i += 1;
//     }

// }

// function extract_number(s) {
//     var a=[]
//     for (var i = 0; i < s.length;) {
//         if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//             var j = i;
//             while (j < s.length && s.charCodeAt(j) >= 48 && s.charCodeAt(j) <= 57) {
//                 j++;
//             }
//             a.push(parseInt(s.slice(i, j)));
//             i = j
//         }
//         else {
//             i++;
//         }
//     }
//     return a;
//     };
// var str = "abc334v44d";
//     console.log(extract_number(str))

// var str = "hello";
// console.log(str.split(''));

// var arr = [1, 5, 2, 4];
// arr.sort(function (a, b) {
//     return b-a;
// })

// console.log(arr)

// var a = -5;
// function dec2bin(a) {
//     return (a>>>0).toString(2)
// }

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function makeArrayPrime(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         let currentNumber = arr[i];
//         while (!isPrime(currentNumber)) {
//             currentNumber++;
//             if (currentNumber - arr[i] > k) {
//                 arr[i] = 0;
//                 break;
//             }
//         }
//         if (arr[i] !== 0) {
//             arr[i] = currentNumber;
//         }
//     }

//     return arr;
// }

// // Test cases
// const arr1 = [10, 12, 15, 20, 22];
// const k1 = 3;
// console.log(makeArrayPrime(arr1, k1)); // Output: [11, 13, 17, 23, 23]

// var nums =[2,14,18,22,22]

// nums.sort(function(a,b){
//     return a-b;
// })

// console.log(nums)

// var firstMap = new Map();
// firstMap.set(2, 32);
// firstMap.set(3, 32);
// firstMap.set(4, 32);
// firstMap.set(1, 32);

// console.log(firstMap.size)
// for (keyv of firstMap){
//     console.log(keyv)
// }

// var setf = new Set();
// setf.add(1);
// setf.add(1);
// var nums = [1,2,3,1]
// var mapping= new Map();
//     for(var i=0;i<nums.length;i++){
//         if (mapping.get(nums[i]) == undefined) {
//             mapping.set(nums[i], 1);
//         }
//         else{
//             mapping.set(nums[i],mapping.get(nums[i])+1);
//         }
// }
// for(var i=0;i<nums.legth;i++){

//     if((mapping.get(nums[i]))>1){
//         console.log(true)
//         break;
//     }

//   }
// console.log(false)
// var nums=[3,2,4]

// var nm = new Map();
// var l = nums.length;
// for (var i = 0; i < l; i++) {
//     if (nm.get(nums[i]) === undefined) {
//         nm.set(nums[i], i)

//     }
//     else {
//         nm.set(nums[i], nm.get(nums[i])+i)
//     }
// }
// console.log(nm)
// var target;
// // for (var i = 0; i < l; i++){
// //     var b=target-nums[i]
// //     if(nm.has(b)){
// //       console.log(nm.get(b))
// //     }
// //   }

// var twoSum = function (nums, target) {
//     var nm = new Map();
//     var l = nums.length;
//     for (var i = 0; i < l; i++) {
//         if (nm.get(nums[i]) === undefined) {
//             nm.set(nums[i], i)

//         }
//         else {
//             nm.set(nums[i], nm.get(nums[i]) + i)
//         }
//     }
//  return
// };
//     var nums = [2, 7, 11, 15];
//     var target = 13;
//     console.log(twoSum(nums,target))

// console.log("0"==[])

// var arr = [{ name: "prashant", salary: 100 }];
// console.log(arr.length)

// const ans = Array(20).fill(false);
// ans[1] = true;
//     console.log(ans);

// const ans=new Array(5).fill(true);

// ans[1] = false;
//     console.log(ans)

// var n = 10;

// var arr = [];
// var x = 2;
// for (var i = 0; i < n; ) {
//   var flag = 1;
//   for (j = 2; j < x; j++) {
//     if (x % j == 0) {
//       flag = 0;
//       break;
//     }
//   }
//   if (flag == 1) {
//     arr.push(x);
//     i++;
//   }
//   x++;
// }
// console.log(arr);

// var x = -123;
// console.log(String(x))
// console.log(`${x}`)
// console.log(x.toString())

// var n = 3454;
// console.log(String(n).length)

// let arr = [2, 1, 4, 6, 7];
// console.log(arr.map(x => { return 2 * x});

// var numDifferentIntegers = function(word) {
//     let map=new Map()
//     for(let i=0;i<word.length;i++){

//         if(word.charCodeAt(i)>=48 && word.charCodeAt(i)<=57){
//             j=i
//             while(j<word.length && word.charCodeAt(j)>=48 && word.charCodeAt(j)<=57){
//                 j++;
//             }

//             map.set(parseInt(word.slice(i, j)), i);
//          i=j
//         }else{
//             i++
//         }
//     }
//     return map;
// };

// var s = "xeuhqendvrq3n35"
// console.log(numDifferentIntegers(s))
// var swap = (arr) => {
//   let sortArray = [...arr].sort((a, b) => a - b);

//   let indexMap = new Map();
//   for (let i = 0; i < sortArray.length; i++) {
//     indexMap.set(sortArray[i], i);
//   }

//   let change = 0;
//   const visited = new Array(arr.length).fill(false);
//   for (let i = 0; i < arr.length; i++) {
//     if (!visited[i]) {
//       let count = 0;
//       let j = i;
//       while (!visited[j]) {
//         visited[j] = true;
//         j = indexMap.get(arr[j]);
//         count++;
//       }

//       if (count > 0) {
//         change = change + count - 1;
//       }
//     }
//   }
//   return change;
// };

// let arr = [10, 19, 6, 5, 3];
// console.log(swap(arr));

// let i = 1;
// while (i <= 5) {
//     let j = 1;
//     var str=""
//     while (j <= 6 - i) {
//         str += "*"
//         j++;

//     }
//     console.log(str);
//     i++;
// }
// i = 1;
// while (i <= 5) {
//     let j = 1
//     let str=''
//     while (j<= i) {
//         str += "*"
//         j++
//     }
//     console.log(str)
//     i++;
// }

// Total number of obj created using static variable
// class object{
//     static i = 0;
//     constructor() {
//         object.i += 1;
//     }
// }

// let x1 = new object()
// let x2 = new object()
// let x3 = new object()
// console.log(object.i)

// function reverse(arr, s, e) {
//   while (s < e) {
//     [arr[s], arr[e]] = [arr[e], arr[s]];
//     s++;
//     e--;
//   }
//   return arr;
// }

// var arr = [32, 4, 5];
// console.log(reverse(arr, 0, 2));
//     let set=new Set()
// let sentence="t"
// for(let i=97;i<=122;i++){
//        set.add(String.fromCharCode(i))
// }
// for (let j = 0; j < sentence.length; j++){
//     if (set.has(sentence[j])) {
//         set.delete(sentence[j])
//     }
// }
// console.log(set)

// sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// for (val of sentences) {
//     console.log(val.split(' '))
// }
// function concatenate(arr, len) {
//     // let res=""
//     // for (let i = 0; i < arr.length; i++){
//     //     if (arr[i].length == len){
//     //         res += arr[i];
//     //     }
//     // }
//     // return res;
// }
// let arr = ["abc", "def", "xyzd", "lmn"]
// let len = 3
// console.log(concatenate(arr,len))

// let i = 2;
// console.log(i**3)

// let a = [1, 2, -1, 4]
// let max = a[0]

// for (let i = 0; i < a.length; i++){
//     let sum = 0

//     for (let j = i; j < a.length; j++) {

//         }
//     }

// }
// console.log(max)
// let s="((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
// let open=[]; //Keeping track of starting braces index
//     let star=[]; //Keeping Track of *
//     for(let i=0;i<s.length;i++){
//         if(s[i]=="("){
//             open.push(i);
//         }
//         else if(s[i]=="*"){
//             star.push(i);
//         }
//         else{
//             if(open.length!=0){
//                 open.pop()
//             }else if(star.length!=0){
//                 star.pop()
//             }else{
//                 return false;
//             }
//         }
// }
// while(open.length!=0){
//     if(star.length==0){
//         return false;
//     }else if((open[open.length-1]) < (star[star.length -1])){
//         open.pop();
//         star.pop();
//     }
//     else{
//         return false;
//     }
// }

// console.log(open.length)
// console.log(open)
//     console.log(star)
// let a = [];
// console.log(a.pop())

// Nearest greater to right;
// let arr = [1, 4, 2, 5, 6, 3, 2];
// // ans [[4,5,5,6,-1,-1,-1]
// let stack = [];
// let ans = [];
// for (let i = arr.length-1; i >= 0; i--){
//     if (stack.length == 0) {
//         ans.push(-1);
//     }
//     else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
//         ans.push(stack[stack.length - 1]);
//     }
//     else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//         while (stack.length > 0 && stack[stack.length - 1]<= arr[i]) {
//             stack.pop();
//         }
//         if (stack[stack.length - 1] > arr[i]) {
//             ans.push(stack[stack.length-1])
//         } else {
//             ans.push(-1)
//         }
//     }
//     stack.push(arr[i])
// }
// ans = ans.reverse();
// console.log(ans)
// console.log(stack)

// let a = [1, 2]
// let b=[]
// for (let i = 0; i < a.length; i++){
//     if (a[i] == 1) {
//         console.log("hello")
//     } else if (a[i] == 2) {
//         console.log("hyy")
//     }
//     b.push(3)
// }
// console.log(a)
// console.log(b)

// Nearest greatest on left
// let a = [3, 2, 5, 1, 7, 8, 2];
// // ans=[-1,3,-1,5,-1,-1,8]
// let stack = [];
// let ansStack = [];

// for (let i = 0; i < a.length; i++){
//     if (stack.length == 0) {
//         ansStack.push(-1)
//     }
//     else if (stack.length > 0 && stack[stack.length - 1] > a[i]) {
//         ansStack.push(stack[stack.length-1])
//     } else if (stack.length > 0 && stack[stack.length - 1] <= a[i]) {
//         while (stack.length > 0 && stack[stack.length - 1] <= a[i]) {

//             stack.pop()
//         }
//         if (stack.length === 0) {
//             ansStack.push(-1)
//         } else if (stack[stack.length - 1] > a[i]) {
//             ansStack.push(stack[stack.length-1])
//         }
//     }
//     stack.push(a[i])
// }

// let a = [3, 2, 5, 1, 7, 8, 2];
// // Nearest Shortest to right
// // [-1,-1,2,-1,1,7,1]
// let stack = [];
// let ans = [];
// for (let i = 0; i < a.length; i++){
//     if (stack.length == 0) {
//         ans.push(-1)
//     } else if (stack.length > 0 && stack[stack.length - 1] < a[i]) {
//         ans.push(stack[stack.length-1])
//     } else if (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
//         while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
//             stack.pop()
//         } if (stack.length == 0) {
//             ans.push(-1)
//         } else {
//             ans.push(stack[stack.length-1])
//         }

//     }
//     stack.push(a[i])
// }

// console.log(stack)
// console.log(ans)

// let a = [1, -1,-5,-2, 3, 2, -7]
// let left = 0;
// let right = a.length - 1;
// while (left < right) {
//     while (left <right && a[left] > 0) {
//         left++;
//     }
//     while (left<right && a[right] < 0) {
//         right--;
//     }
//     if (left < right) {
//         [a[left],a[right]]=[a[right],a[left]]
//     }
// }
// console.log(a)

// let a = [1,2,4,7,11];
// let max = 0;
// for (let i = 1; i < a.length; i++){
//     max=Math.max(max,Math.abs(a[i]-a[i-1]))
// }
// return max;
// console.log(max)

// let s = "prashant"
// console.log(s.split("").sort().join(''))
// let s="abbaca"
// console.log(s.split("").sort().join(''))

// let nums = [1, 2, 3, 4, 3]
// let stack = [];
// stack.push(nums[nums.length-1])
// let ans=[];
//     for(let i=0;i<nums.length-1;i++){
//         if(nums[i]>nums[nums.length-1]){
//             ans.push(nums[i]);
//             break;
//         }
// }
// if (ans.length == 0) {
//     ans.push(-1)
// }
//     console.log(ans)

// for(let i=nums.length-2;i>=0;i--){
//     if(stack.length==0){
//         ans.push(-1);
//     }else if(stack.length>0 && stack[stack.length-1]>nums[i]){
//         ans.push(stack[stack.length-1]);
//     }else if(stack.length>0 && stack[stack.length-1]<=nums[i]){
//         while(stack.length>0 && stack[stack.length-1]<=nums[i]){
//             stack.pop();
//         }
//         if(stack[stack.length-1]>nums[i]){
//             ans.push(stack[stack.length-1]);
//         }else{
//             ans.push(-1);
//         }
//     }
//     stack.push(nums[i]);
// }

// console.log(ans.reverse())
// let s="2[abc]3[cd]ef"

//     let stringStack=[];

// for (let i = 0; i < s.length; i++) {
//     if (s[i] != "]") {
//         stringStack.push(s[i])
//     }
//     else {
//         var str = '';
//         while (stringStack[stringStack.length-1]!="[") {
//             str=stringStack.pop()+str
//         }
//         stringStack.pop();
//         var k = ""

//         while (/[0-9]/.test(stringStack[stringStack.length-1])) {
//             k = stringStack.pop() + k;
//         }
//         str = str.repeat(k)
//         stringStack.push(str)

//     }

// }

// console.log(stringStack.join(''))

// let n = 14;
// let sum = 0;
// for (let i = 1; i < n; i++){
//     sum += Math.pow(i, 2)
//     if (sum > n) {
//         console.log(i - 1)
//         break;
//     }

// }

function isPrime(a) {
  if (a < 2) {
    return false;
  }

  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

function makeArrayPrime(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let checker = k;
    while (!isPrime(arr[i]) && checker > 0) {
      arr[i]++;
      checker--;
    }
  }
  return arr;
}

let array = [10, 12, 15, 20, 22];

let k = 3;

console.log(makeArrayPrime(array, k));
console.log(!isPrime(20));
