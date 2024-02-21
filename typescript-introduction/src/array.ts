// ループ内での値のチェック

const l = [1, 2, 3];

for (const i of l) {
    console.log(i);
}
// => 1
//    2
//    3

const L = [[1, 2], 3, 4];

for (let i of L) {
    i = 1000;
}

console.log(L);
// => [ [ 1, 2 ], 3, 4 ]


// destructuring

const LL = [[1, 2], [3, 4], [5, 6]];

for (let [i, k] of LL) {
    console.log(i, k)
}
// => 1 2
//    3 4
//    5 6