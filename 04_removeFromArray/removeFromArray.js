const removeFromArray = function (array, ...allValuesToRemove) {
    // Array = [1,2,2,3]
    // toRemove = [2]
    for (const toRemove of allValuesToRemove) {
        while (array.indexOf(toRemove) !== -1) {
            let indexOfToRemove = array.indexOf(toRemove); // index = 1
            array.splice(indexOfToRemove, 1)
        }
        // Remove toRemove from array
    }

    // Array = [1,3]
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
