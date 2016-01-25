/**
 * Created by Ivan on 25.1.2016 г..
 */

function solve(arr) {
    var contain = function (fragile, isFood, isDrink, kg, transferdWith) {
        this.kg = kg;
        this.fragile = fragile;
        this.type = calculateType(isFood, isDrink);
        this.transferredWith = transferdWith;

        function calculateType(isFood, isDrink) {
            if (isFood) {
                return 'food';
            } else if (isDrink) {
                return 'drink';
            } else {
                return 'other';
            }
        }
    };
    var output = {};

    for (var i = 0; i < arr.length - 1; i++) {
        var splitLine = arr[i].split(/[.]*\*[.]*/);
        var name = splitLine[0];
        var luggage = splitLine[1];
        var isFood = (splitLine[2]) === 'true';
        var isDrink = (splitLine[3]) === 'true';
        var isFragile = (splitLine[4]) === 'true';
        var weightInKg = Number(splitLine[5]);
        var transferedWith = splitLine[6];

        output[name] = {};
        output[name][luggage] = new contain(isFragile, isFood, isDrink, weightInKg, transferedWith);
    }

    var criteria = arr[arr.length - 1];
    if (criteria.toLowerCase() === 'strict') {
        console.log(JSON.stringify(output));
        return;
    }

    var sorted = {};
    for (var name in output) {
        var keys = Object.keys(output[name]);

        if (criteria.toLowerCase() === 'weight') {
            keys.sort(function (a, b) {
                return output[name][a].kg - output[name][b].kg;
            })
        } else {
            keys.sort(function (a, b) {
                return a.localeCompare(b);
            })
        }

        sorted[name] = {};
        for (var key in keys) {
            sorted[name][keys[key]] = output[name][keys[key]];
        }
    }


    console.log(JSON.stringify(sorted));
}