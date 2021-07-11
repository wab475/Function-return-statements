//Checking if an number is big
const biggerThan100 = function (number) {
    const result = number;
    if (result > 100) {
        return result;
    }
    return "false";
};
const checkNumber = biggerThan100(85);
console.log(checkNumber);


//Bouncher at a club
const Bouncher = function (maxNumber, currentNumber, age, minAge) {
    const max = maxNumber;
    const current = currentNumber;
    const min = minAge;
    const checkAge = age;
    if (current >= max) {
        return "It's too busy now, come back later";
    }
    if (checkAge <= min) {
        return "this is a club for adults"
    }
    if (checkAge > min, current < max)
        return "Come in";
};

const bouncherCheck = Bouncher(200, 150, 28, 25)

console.log(bouncherCheck)
//Het gemiddelde berekenen
const calcAverage = function (number1, number2, number3, number4, number5) {
    const average = Math.round((number1 + number2 + number3 + number4 + number5) / calcAverage.length);
    return average;
}
const result = calcAverage(5, 10, 6, 8, 15);
console.log(result);












