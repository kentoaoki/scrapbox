var obj = {
    b: 1,
    c: 2
};
console.log(obj.b, obj.c); // => 1, 2
console.log(obj['b'], obj['c']); // => 1, 2
// console.log(obj[b], obj[c]); // => error Cannot find name 'c'.
var objStr = {
    'b': 1,
    'c': 2
};
console.log(objStr.b, objStr.c); // => 1, 2
var objNum = {
    1: 1,
    2: 2
};
// console.log(objNum.1, objNum.2); // => error ',' expected.
console.log(objNum[1], objNum[2]); // => 1, 2
console.log(objNum['1'], objNum['2']); // => 1, 2
for (var num in objNum) {
    console.log(typeof num);
}
// => string
//    string
var objStrDiff = {
    'diff name': 1,
    if: 1
};
// console.log(objStrDiff.diff name); // => error ',' expected.
console.log(objStrDiff['diff name']); // => 1
