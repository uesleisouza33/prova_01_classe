const rl = require('readline-sync')
const PiramideHexagonal = require('./models/PiramideHexagonal')

let altura = rl.question("Digite a altura da piramide: ")
let aresta = rl.question("Digite a aresta da piramide: ")


const piramideHex = new PiramideHexagonal(aresta, altura)

let areaBase = piramideHex.calcularAreaBase();
let areaLateral = piramideHex.calcularAreaLateral();
let volume = piramideHex.calcularVolume();



console.log(`A área da base da pirâmide hexagonal é: ${areaBase.toFixed(3)}`);
console.log(`A área lateral da pirâmide hexagonal é: ${areaLateral.toFixed(3)}`)
console.log(`O volume da pirâmide hexagonal é: ${volume.toFixed(3)}`);
