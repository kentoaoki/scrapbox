// ループ内での値のチェック
var l = [1, 2, 3];
for (var _i = 0, l_1 = l; _i < l_1.length; _i++) {
    var i = l_1[_i];
    console.log(i);
}
// => 1
2;
3;
var L = [[1, 2], 3, 4];
for (var _a = 0, L_1 = L; _a < L_1.length; _a++) {
    var i = L_1[_a];
    i = 1000;
}
console.log(L);
// => [ [ 1, 2 ], 3, 4 ]
// destructuring
var LL = [[1, 2], [3, 4], [5, 6]];
for (var _b = 0, LL_1 = LL; _b < LL_1.length; _b++) {
    var _c = LL_1[_b], i = _c[0], k = _c[1];
    console.log(i, k);
}
