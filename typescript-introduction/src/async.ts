async function get(): Promise<number> {
    return 3;
}

const p = get();
p.then(num => {
    console.log(num);
})