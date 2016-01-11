var array = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", {bunniesCount: 10}, [10, 20, 30, 40]];
var numbers = [];
var minNumber = Number.MAX_VALUE;
var maxNumber = Number.MIN_VALUE;
var dictionary = {};
var maxFrequency = 0;
var number;

for (var i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
        numbers.push(array[i]);
        if (array[i] < minNumber) {
            minNumber = array[i];
        }

        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }

        if (dictionary[array[i]] === undefined) {
            dictionary[array[i]] = 1;
        } else {
            dictionary[array[i]]++;
        }

        if (dictionary[array[i]]>maxFrequency){
            maxFrequency = dictionary[array[i]];
            number = array[i];
        }
    }
}

numbers.sort(function (a, b) {
    return b - a
});

console.log("Min number: "+minNumber);
console.log("Max number: "+maxNumber);
console.log("Most frequent number: " + number);
console.log(numbers);
