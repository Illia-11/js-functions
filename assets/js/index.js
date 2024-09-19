// task1
console.log('=== Task 1 ===');
const getSmallerNumber = function() {
  const number1 = prompt('Enter first number: ');
  const number2 = prompt('Enter second number: ');
  if(typeof number1 !== 'number' || typeof number2 !== 'number') {
    return null;
  }
  // if(number1 > number2) {
  //   return number2;
  // } else {
  //   return number1;
  // }
  return number1 > number2 ? number2 : number1;
}
console.log(getSmallerNumber());

// task2
console.log('=== Task 2 ===');
const isAdult = function() {
  const age = prompt('Enter you age: ');
  // if(age >= 18) {
  //   return true;
  // } else {
  //   return false;
  // }
  return age >=18 ? true : false;
}
console.log(isAdult());

// task3
console.log('=== Task 3 ===');
const price = function() {
  const Price = prompt('Enter Sum: ');
  // if(Price >= 1500) {
  //   return Price - Price / 100 * 10;
  // } else {
  //   return Price - Price / 100 * 5;
  // }
  return Price >= 1500 ? Price - Price / 100 * 10 :  Price - Price / 100 * 5;
}
console.log(price());

// task4
console.log('=== Task 3 ===');
const isEven = function() {
  const Number = prompt('Enter a number: ');
  // if(Number % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return Number % 2 === 0 ? true : false;
}
console.log(isEven());