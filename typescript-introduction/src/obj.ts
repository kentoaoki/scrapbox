const obj = {
    b: 1,
    c: 2
}

console.log(obj.b, obj.c); // => 1, 2

const objStr = {
    'b': 1,
    'c': 2
}

console.log(objStr.b, objStr.c); // => 1, 2

const objNum = {
    1: 1,
    2: 2
}

// console.log(objNum.1, objNum.2); // => error ',' expected.

console.log(objNum[1], objNum[2]); // => 1, 2
console.log(objNum['1'], objNum['2']); // => 1, 2

for (let num in objNum){
    console.log(typeof num);
}
// => string
//    string