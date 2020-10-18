let meuArray = [];

for (let i = 1; i <= 25; i += 1) {
    meuArray.push(i);
}
console.log("Meu Array:")
console.log(meuArray)

let meuArrayDividido = [];

for (let j = 0; j < meuArray.length; j += 1) {
    meuArrayDividido[j] = meuArray[j] / 2;
}
console.log("Meu Array / 2:")
console.log(meuArrayDividido)
