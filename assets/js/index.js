// task1
console.log('=== Task 1 ===');
const getSmallerNumber = function(number1, number2) {
  if(typeof number1 !== 'number' || typeof number2 !== 'number') {
    return null;
  }
  if (isNaN(number1)) {
    return null;
  }
  if (isNaN(number2)) {
    return null;
  }
  // if(number1 > number2) {
  //   return number2;
  // } else {
  //   return number1;
  // }
  return number1 > number2 ? number2 : number1;
}
const number1 = +prompt('Enter first number');
const number2 = +prompt('Enter second number');
console.log(getSmallerNumber(number1, number2));


// task2
console.log('=== Task 2 ===');
const isAdult = function(age) {
  if(typeof age !== 'number') {
    return null;
  }
  if (isNaN(age)) {
    return null;
  }
  // if(age >= 18) {
  //   return true;
  // } else {
  //   return false;
  // }
  return age >=18 ? true : false;
}
const age = +prompt('Enter you age: ');
console.log(isAdult(age));


// task3
console.log('=== Task 3 ===');
const price = function(sale) {
  if(typeof sale !== 'number') {
    return null;
  }
  if (isNaN(sale)) {
    return null;
  }
  // if(sale >= 1500) {
  //   return sale - sale / 100 * 10;
  // } else {
  //   return sale - sale / 100 * 5;
  // }
  return sale >= 1500 ? sale - sale / 100 * 10 :  sale - sale / 100 * 5;
}
const sale = +prompt('Enter Sum: ');
console.log(price(sale));

// task4
console.log('=== Task 4 ===');
const isEven = function(evNumber) {
  if(typeof evNumber !== 'number') {
    return null;
  }
  if (isNaN(evNumber)) {
    return null;
  }
  // if(Number % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return evNumber % 2 === 0 ? true : false;
}
const evNumber = +prompt('Enter a number: ');
console.log(isEven(evNumber));