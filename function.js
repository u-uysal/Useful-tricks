//example 1

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
console.log(text);

// example 2
function square(number) {
  return number * number;
}

let result = square(5);
console.log(result);

//example 3

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}

// n = 5   5 * 24 = 120
//factorial (4)  = 4 * 6
//factorial (3) = 3 * 2
//factorial (2) = 2 * 1
