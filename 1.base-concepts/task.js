"use strict";
function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthRate = percent / 100 / 12;
  let loan = amount - contribution;
  let sumForMonth =
    loan * (monthRate + monthRate / (Math.pow(1 + monthRate, countMonths) - 1));
  let totalAmount = sumForMonth * countMonths;

  return +totalAmount.toFixed(2);
}
