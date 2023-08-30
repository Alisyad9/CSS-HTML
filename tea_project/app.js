console.log('hey');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
let element = [];
for (let index = 0; index < arr.length; index++) {
  console.log();
  element.push(arr[index]);
}

arr.push(element);
console.log(arr);
console.log(element);
