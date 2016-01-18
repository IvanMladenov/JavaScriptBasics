var arr = [
    "Pesho",
    4,
    4.21,
    {name: 'Valyo', age: 16},
    {type: 'fish', model: 'zlatna ribka'},
    [1, 2, 3],
    "Gosho",
    {name: 'Penka', height: 1.65}
];

var objects = extractObjects(arr);

console.log(objects);

function extractObjects(array) {
    var output = [];

    for (var index in array) {
        if (typeof array[index] === 'object') {
            if (!Array.isArray(array[index])) {
                output.push(array[index]);
            }
        }
    }

    return output;
};
