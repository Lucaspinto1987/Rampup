// //Ejercicio 2
// Crear una función que reciba por parámetro 3 números. Partiendo de los dos primeros números, pintar por consola cada nuevo número generado de la serie
// de Fibonacci.
// Esta se trata de una serie infinita de números naturales que empieza con un 0 y un 1 y continúa añadiendo números que son la suma de los
// dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987...La diferencia es que en vez de empezar con el 0 y el 1, empezará con los
// números que le pasemos como primer y segundo argumento. Como la serie es infinita, pintaremos por consola únicamente números hasta llegar al número
// que la función recibirá como tercer parámetro. Además la función también retornará un array que contenga dichos números.
// Ejercicio 2
// Ejemplo: si pasamos como argumento los números 0, 1 y 1000, la función debe pintar la serie de Fibonacci original y detenerse al llegar a
// 1000: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987.
// Además la función devolvería lo siguiente: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// 55, 89, 144, 233, 377, 610, 987 ]
// Ejercicio 2
// Resumen:
// ● La función recibe tres parámetros numéricos
// ● Hay que generar la serie Fibonacci partiendo de los dos primeros
// ● Hay que parar la serie al llegar al tercero
// ● Hay que consolear cada nuevo número que generemos
// ● La función debe devolver un array que contenga los números
// generados (incluyendo los dos iniciales que la función recibe por
// parámetro)//

// function Fibonacci(number1, number2, number3) {
//   let arrFibonacci = [number1, number2];
//   while (
//     arrFibonacci[arrFibonacci.length - 1] +
//       arrFibonacci[arrFibonacci.length - 2] <
//     number3
//   ) {
//     arrFibonacci.push(
//       arrFibonacci[arrFibonacci.length - 1] +
//         arrFibonacci[arrFibonacci.length - 2]
//     );
//   }
//   return arrFibonacci;
// }
// console.log(Fibonacci(5, 3, 200));
function Fibonacci(number1, number2, number3) {
  let arrFibonacci = [number1, number2];
  let lastNumber = number2;
  let secondToLastNumber = number1;
  while (lastNumber + secondToLastNumber < number3) {
    arrFibonacci.push(lastNumber + secondToLastNumber);
    secondToLastNumber = lastNumber;
    lastNumber = lastNumber + secondToLastNumber
  }
  return arrFibonacci;
}