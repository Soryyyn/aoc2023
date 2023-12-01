const fs = require("fs");

const fileContent = fs.readFileSync("input", "utf-8");

let finalSum = 0;

const getNumberValueFromWord = (text) => {
  const dict = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return dict[text];
};

fileContent.split("\n").forEach((line) => {
  if (line === "") {
    return;
  }

  console.log(`current line: ${line}`);

  // fucking hell
  const foundNumbers = Array.from(
    line.matchAll(
      /(?=(([1-9])|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)))/g,
    ),
    (regex) => regex[1],
  );

  let first = -1;
  let second = -1;

  if (foundNumbers === null) {
    return;
  }

  first = isNaN(parseInt(foundNumbers[0]))
    ? getNumberValueFromWord(foundNumbers[0])
    : parseInt(foundNumbers[0]);
  second = isNaN(parseInt(foundNumbers[foundNumbers.length - 1]))
    ? getNumberValueFromWord(foundNumbers[foundNumbers.length - 1])
    : parseInt(foundNumbers[foundNumbers.length - 1]);

  console.log(`first number: ${first} / second number: ${second}`);

  if (first > -1 && second > -1) {
    finalSum += first * 10 + second;
  }
});

console.log(`final sum: ${finalSum}`);
