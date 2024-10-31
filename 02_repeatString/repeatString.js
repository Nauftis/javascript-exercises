const repeatString = function(text, numberToBeRepeated) {
    if (numberToBeRepeated < 0) {
        return "ERROR";
    }
    let str = "";
    for (let i = 0; i < numberToBeRepeated; i++) {
      str += text;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
