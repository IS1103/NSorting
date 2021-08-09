const sorter = require('./index');
let arr = [6, 1, 9, 8, 0, 2, 4, 15];
let arr1 = sorter.sort(arr);
console.log(arr1);

let _arr = [{ a: 6 }, { a: 1 }, { a: 9 }, { a: 5 }, { a: 4 }, { a: 66 }];
let arr2 = sorter.sortObj(_arr, "a");
console.log(arr2);