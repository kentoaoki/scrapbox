function A() {
    console.log('A');
    return true;
}
function B() {
    console.log('B');
    return false;
}
console.log(A() || B()); // => A
true;
// ||を使った初期値のセット
var a = null;
var b = a || 2;
console.log("b = ".concat(b)); // => 2
