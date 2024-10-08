const lista = [1,2,3,4,5]
lista.forEach((value, i) => {
  console.log(value, i)
})

const numerosPares = lista.filter((element) => {
  return element % 2 === 0
})

console.log(numerosPares)