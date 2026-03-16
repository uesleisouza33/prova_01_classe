const PiramideHexagonal = require("../models/PiramideHexagonal");

describe("Testando as funções da classe Pirâmide Hexagonal", () => {
  test("Teste unitário do cálculo da área da base.", () => {
    const piramideHex = new PiramideHexagonal(2, 2);
    const resultado = 10.392;
    expect(piramideHex.calcularAreaBase()).toBeCloseTo(resultado, 3);
  });

  test("Teste unitário do cálculo da área lateral.", () => {
    const piramideHex = new PiramideHexagonal(2, 2);
    const resultado = 15.874;
    expect(piramideHex.calcularAreaLateral()).toBeCloseTo(resultado, 3);
  });

  test("Teste unitário do cálculo do volume.", () => {
    const piramideHex = new PiramideHexagonal(2, 2);
    const resultado = 6.928;
    expect(piramideHex.calcularVolume()).toBeCloseTo(resultado, 3);
  });

  test("Teste unitário do cálculo do apótema da base.", () => {
    const piramideHex = new PiramideHexagonal(2, 2);
    const resultado = 1.732;
    expect(piramideHex.calcularApotemaBase()).toBeCloseTo(resultado, 3);
  });

  test("Teste unitário do cálculo do volume.", () => {
    const piramideHex = new PiramideHexagonal(2, 2);
    const resultado = 2.646;
    expect(piramideHex.calcularApotemaPiramide()).toBeCloseTo(resultado, 3);
  });
});
