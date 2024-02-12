
function A(){
    console.log('A');
    return true;
}

function B(){
    console.log('B');
    return false;
}

console.log(A() || B()); // => A
                               true

// ||を使った初期値のセット
const a = null;
const b = a || 2;
console.log(`b = ${b}`); // => 2