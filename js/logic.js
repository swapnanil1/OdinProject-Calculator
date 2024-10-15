const add = function (n1, ...extras) {
  for (let n of extras) {
    n1 += n;
  }
  return n1;
};

const subtract = function (n1, ...extras) {
  for (let n of extras) {
    n1 -= n;
  }
  return n1;
};

const sum = function (array) {
  let sum = 0;
  for (let n of array) sum = sum + n;
  return sum;
};

const multiply = function (array) {
  let multi = 1;
  for (let n of array) {
    multi *= n;
  }
  return multi;
};

const power = function (n1, n2) {
  return Math.pow(n1, n2);
};

const factorial = function (n1) {
  fac = 1;
  for (let i = 1; i <= n1; i++) {
    fac = fac * i;
  }
  return fac;
};
