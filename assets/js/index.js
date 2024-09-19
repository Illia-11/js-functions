// task1
console.log('=== Task 1 ===');
const singleDigitNum = +prompt('Enter a number: ');
if (singleDigitNum < 10 && singleDigitNum >= 0) {
  console.log('Right number!');
} else {
  console.log('False number!');
}

// task2
console.log('=== Task 2 ===');
const age = +prompt('Enter your age: ');
if (age >= 18) {
  console.log('You are an adult!');
} else {
  console.log('You are a child!');
}

// task3
console.log('=== Task 3 ===');
const sumPrice = +prompt('Enter a sum: ');
if (sumPrice >= 1500) {
  console.log(sumPrice - (sumPrice / 100 * 10));
} else {
  console.log(sumPrice - (sumPrice / 100 * 5));
}

// task4
console.log('=== Task 4 ===');
const evenNumber = +prompt('Enter a number: ');
if (evenNumber % 2 === 0) {
  console.log('Number is even!');
} else {
  console.log('Number is odd!');
}