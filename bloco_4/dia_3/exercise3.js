let n = 5;

let base = "";

for (let i = 0; i < n; i += 1) {
    base += "*";
    console.log(`${(n - i) * " "} ${base}`)
}