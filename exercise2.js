/*Задание 2

Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны.
Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.*/

function numPrime(num) {
  let isPrime, result;
  isPrime = true;
  if (num > 1 && num <= 1000) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    result = isPrime ? `Число ${num} - простое` : `Число ${num} - составное`;
  }else if (num > 1000) {
    result = 'Данные неверны';
  } else if (num === 0) {
    result = 'Ноль не натуральное число';
  }
  else if (num === 1) {
    result = ' Не является ни простым, ни составным числом'
  }
  return result;
}
console.log(numPrime(5))
console.log(numPrime(1));
console.log(numPrime(0));
console.log(numPrime(33));
console.log(numPrime(1005));
