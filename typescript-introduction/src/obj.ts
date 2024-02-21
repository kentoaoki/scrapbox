const obj = {
    b: 1,
    c: 2
}

console.log(obj.b, obj.c); // => 1, 2
console.log(obj['b'], obj['c']); // => 1, 2
// console.log(obj[b], obj[c]); // => error Cannot find name 'c'.


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

const objStrDiff = {
    'diff name': 1,
    if: 1
}

// console.log(objStrDiff.diff name); // => error ',' expected.
console.log(objStrDiff['diff name']); // => 1

const objA = {
    a: 1
}

const objB = [{a: 1}]

console.log(JSON.stringify(objA) == JSON.stringify(objB[0]));

// 型の使用
const objType: {
    foo: number;
    bar: string;
} = {
    foo: 123,
    bar: 'hello',
}

console.log(objType);
// => { foo: 123, bar: 'hello' }


// インデックスシグネチャ
type Price = {
    [key: string]: number;
}

const data: Price = {
    apple: 100,
    pc: 10000,
}

data.globe = 400;
console.log(data);
// => { apple: 100, pc: 10000, globe: 400 }