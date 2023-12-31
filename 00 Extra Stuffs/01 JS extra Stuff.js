//! SHORTCUT TO FIND MAX AND MIN IN ARRAY

// let a = [1, 5, 2, 6, 8];
// max = Math.max(...a);
// console.log(max)

//? SHORTCUT TO PRINT CHAR USING ASCII

// let set =new Set()
// for (let i = 97; i <=122; i++){
//     set.add(String.fromCharCode(i))
// }
// console.log(set)

//! SHORTCUT TO CHECK CHAR IS NUMBER ,a to z Or A to Z

// let res = "";
// let s = "134sh";
// for (let i = 0; i < s.length; i++) {
//   if (/[a-z]/.test(s[i])) {
//     res += s[i];
//   }
// }
// console.log(res);

// ? REVERSE() METHOD AUTOMATICALLY REVERSE PARENT ARRAY TOO.

// let a = [1, 2, 3, 4, 6]
// let l = a;
// let r = a.reverse();
// console.log(l)
// console.log(a)
// console.log(r)

//! Flat Method For joining the 2d array to 1d

// let a = [[1, 2, 4], [12, 3, 4]]
// console.log(a.flat())

//? Split To convert string into Array by giving some conditions(seperator)

// let s = "  hello world  "
// console.log(s.split(""))
// console.log(s.split(" "))

//! Repeat certain strings

// s = "  hello world  "
// console.log(s.repeat(3))

//? Join >> used to join the elements of array by some seperator

// let a = [1, 2, 4];
// console.log(typeof a.join(" "))

//! Shift >> changes the original array;
// let a = [1, 2, 3]
// console.log(a.shift())
// console.log(a)

//? unshift >> Adds an element at index 0 in original array

// console.log(a.unshift(4))
// console.log(a)

//! indexOf >> its searches from start to end in String .

// let s = "prashant"
// console.log(s.indexOf("r"))

//? lastIndexOf >> searches from end to start and return first match ,but returns index based on starting.

// console.log(s.lastIndexOf("r"))

//! slice ,from LtoR ,indexing from 0..n-1; and from left to right -1,-2,-3 like that. Always prints from LtoR

// let a = "prashant"
// console.log(a.slice(-5,-1))

//? Method of sorting using Spread Operator && Doesn't changes the original Array.Does not change original Array.

// let a = [1, 2, 3, -1, 7];
// console.log([...a].sort((a, b) => b - a));
// console.log(a);

//! Iterator in set>> get the values of set

// let set = new Set([1, 2, 2, 3])
// let iterator = set.values();
// console.log(iterator.next().value)
// console.log(iterator.next().value)

//? Array.from(set)..will create an array from set values.
// const arr = Array.from(set)
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

//! set and map both iterable,object is not iterable.
// we can spread the array and push into some other array
// let a = [1, 2, 3]
// let res = [2,3];
// res.push(...a);
// console.log(res);

//? Splice Method(its also changes the array in place)
// let arr = [1,2,3];
// arr.splice(0, 1, "d")//first ..starting ,how many delete,to insert
// console.log(arr)

//! let a = undefined;
// console.log(!a);//true;
// let temp = undefined;
// console.log(temp!=2);//true;

//? num to hex directly
// let n = 20;
// console.log(n.toString(16))

// ! Replace Method in the String ;
// let str = "Hello , World";
// let newStr = str.replace(/ /g, "");
// let newStr2=str.replace(/,/g, "");
// console.log(newStr,newStr2);