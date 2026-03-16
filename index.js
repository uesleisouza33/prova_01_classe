import PiramideHexagonal from "./models/PiramideHexagonal.js";

let resp = document.getElementById("resp");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {

  let altura = Number(document.getElementById("altura").value);
  let aresta = Number(document.getElementById("aresta").value);

  const piramideHex = new PiramideHexagonal(aresta, altura);

  let areaBase = piramideHex.calcularAreaBase();
  let areaLateral = piramideHex.calcularAreaLateral();
  let volume = piramideHex.calcularVolume();

  resp.innerHTML = `
  <p>A área da base da pirâmide hexagonal é: ${areaBase.toFixed(3)}</p>
  <p>A área lateral da pirâmide hexagonal é: ${areaLateral.toFixed(3)}</p>
  <p>O volume da pirâmide hexagonal é: ${volume.toFixed(3)}</p>
  `;

  console.log(`Área da base: ${areaBase.toFixed(3)}`);
  console.log(`Área lateral: ${areaLateral.toFixed(3)}`);
  console.log(`Volume: ${volume.toFixed(3)}`);

});