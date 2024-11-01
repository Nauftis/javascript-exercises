const sumAll = function (firstNumber, lastNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
        return "ERROR";
    }
    if (firstNumber == NaN || lastNumber == NaN) {
        return "ERROR";
    }
    if (firstNumber < 0 || lastNumber < 0) {
        return "ERROR";
    }
    if (lastNumber < firstNumber) {
        const switchPlace = lastNumber;
        lastNumber = firstNumber
        firstNumber = switchPlace;
    }
console.log(firstNumber, lastNumber)
    let sum = 0;
    for (let i = firstNumber; i <= lastNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
