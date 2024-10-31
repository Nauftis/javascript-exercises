const reverseString = function (input) {
    let stringReversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        input.charAt(i);
        stringReversed  += input.charAt(i)
    }
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
