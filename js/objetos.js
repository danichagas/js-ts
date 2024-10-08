const pessoa = {
  nome: 'Daniel',
  idade: 17,

apresentar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
  }
}

pessoa.apresentar()