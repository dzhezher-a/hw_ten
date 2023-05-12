// числа от 10 до 20
function fromTenToTwenty() {
  let array = [];

  for (let i = 10; i < 21; i++) {
    array.push(i);
  }

  alert(array);
}

// квадраты чисел от 10 до 20

function fromTenToTwentySquare() {
  let array = [];

  for (let i = 10; i < 21; i++) {
    array.push(Math.pow(i, 2));
  }

  alert(array);
}

// таблица умножения на 7

function multiplicationTableForSeven() {
  let array = [];

  for (let i = 1; i < 11; i++) {
    array.push(`7 * ${i} = ${i * 7}\n`);
  }

  alert(array.join(""));
}

// сумма целых чисел от 1 до 15

function sumOfNumbersFromOneToFifteen() {
  let sum = 0;

  for (let i = 1; i < 16; i++) {
    sum += i;
  }

  alert(sum);
}

// произведение всех целых чисел от 15 до 35

function multiplicationOfNumbersFromFifteenToThirtyFive() {
  let mult = 1;

  for (let i = 15; i < 36; i++) {
    mult *= i;
  }

  alert(mult);
}

// среднее арифметическое всех целых чисел от 1 до 500

function sumOfNumbersFromOneToFiveHundred() {
  let avg = 0;
  let sum = 0;

  for (let i = 1; i < 501; i++) {
    sum += i;
    avg = sum / i;
  }

  alert(avg);
}

// сумма всех парных чисел от 30 до 80

function sumOfDoubleNumbersFromThirtyToEighty() {
  let sum = 0;

  for (let i = 30; i < 81; i += 2) {
    sum += i;
  }

  alert(sum);
}

// вывод всех чисел в диапазоне от 100 до 200 кратных 3

function multiplesOfThree() {
  let array = [];

  for (let i = 100; i < 201; i++) {
    if (Number.isInteger(i / 3)) {
      array.push(i);
    }
  }

  alert(array);
}

// Таски 9-11

function naturalNumber() {
  let array = [];
  let arrayPairDividers = [];
  let naturalNumber = prompt("Введите натуральное число: ");

  while (
    !Number.isInteger(Number(naturalNumber)) ||
    isNaN(naturalNumber) ||
    naturalNumber === null ||
    naturalNumber.trim() === ""
  ) {
    naturalNumber = prompt("Ошибка. Введите натуральное число: ");
  }

  // можно написать i < Infinity, но тогда залагает

  for (let i = 1; i < 1000; i++) {
    if (Number.isInteger(naturalNumber / i)) {
      array.push(i);
    }
  }

  // парные делители + их сумма

  let sumOfPairDividers = 0;

  for (let pairDividers of array) {
    if (pairDividers % 2 === 0) {
      arrayPairDividers.push(pairDividers);
      sumOfPairDividers += pairDividers;
    }
  }

  alert(`Делители: ${array};
Парные делители: ${arrayPairDividers};
Сумма парных делителей: ${sumOfPairDividers}.
`);
}

// таблица умножения

function multiplicationTable() {
  let array = [];

  for (let i = 1; i < 11; i++) {
    array.push(`умножение на ${i}: \n`);
    for (j = 1; j < 11; j++) {
      array.push(`${i} * ${j} = ${i * j}\n`);
    }
  }

  console.log(array.join(""));
}

// const taskOne = fromTenToTwenty();
// const taskTwo = fromTenToTwentySquare();
// const taskThree = multiplicationTableForSeven();
// const taskFour = sumOfNumbersFromOneToFifteen();
// const taskFive = multiplicationOfNumbersFromFifteenToThirtyFive();
// const taskSix = sumOfNumbersFromOneToFiveHundred();
// const taskSeven = sumOfDoubleNumbersFromThirtyToEighty();
// const taskEight = multiplesOfThree();
// const taskNineToEleven = naturalNumber();
// const taskTwelve = multiplicationTable();
