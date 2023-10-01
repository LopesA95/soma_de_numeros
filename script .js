/*

  Capturar 2 números e fazer as operações matemáticas de soma,
  subtração, multiplicação, divisão e resto da divisão.

  e para cada operação, mostrar um alerta com resultado.
*/

let firstNumber = prompt("Digite o primeiro numero: ")
let secondNumber = prompt("Digite o segundo numero: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

if (sum % 2 === 0) {
    alert('A soma dos dois números é par.')
} else {
    alert('A soma dos dois números é ímpar.')
}

if (firstNumber === secondNumber) {
    alert('Os dois números são iguais.')
} else {
    alert('Os dois números são diferentes.')
}
