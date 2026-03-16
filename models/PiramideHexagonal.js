class PiramideHexagonal {
  constructor(aresta, altura) {
    this.aresta = aresta;
    this.altura = altura;
  }

  calcularAreaBase() {
    return 3 * 1.732 * ((this.aresta * this.aresta) / 2);
  }

  calcularApotemaBase() {
    return this.aresta * (1.732 / 2);
  }

  calcularApotemaPiramide() {
    return Math.sqrt(this.altura ** 2 + this.calcularApotemaBase() ** 2);
  }

  calcularAreaLateral() {
    return 3 * this.aresta * this.calcularApotemaPiramide();
  }

  calcularVolume() {
    return (1 / 3) * this.calcularAreaBase() * this.altura;
  }
}

module.exports = PiramideHexagonal;
