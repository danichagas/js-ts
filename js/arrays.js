const lista = [1,2,3,4,5,6,7,8,9,10]
 
const listaReduce = lista.reduce((previous, current) => {
  return previous + current
})

console.log(listaReduce)
console.log(lista.join(' - '))