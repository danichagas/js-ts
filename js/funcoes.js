function meApresentar() {
  console.log('Olá meu nome é Daniel')
}

function falarMeuNomeCompleto() {
  meApresentar()
  console.log('E meu sobrenome é Chagas')
}

falarMeuNomeCompleto()

const functionExpression = function () {
  console.log('Está função está sendo invocada atráves de uma variável')
}

functionExpression()