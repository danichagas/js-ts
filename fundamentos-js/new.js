function Carro(marca, modelo) {
  this.marca = marca
  this.modelo = modelo
}


Carro.prototype.apresentarCarro = function () {
  console.log(`Marca: ${this.marca}`)
  console.log(`Modelo: ${this.modelo}`)
}

const carro = new Carro('Renault', 'Kardian')
carro.apresentarCarro()