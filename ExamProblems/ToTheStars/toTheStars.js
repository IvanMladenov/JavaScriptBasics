/**
 * Created by Ivan on 29.1.2016 г..
 */

function solve(arr) {
    var systems = [],
        normandy = arr[3].split(' ').filter(function (x) {
            return !!x
        }).map(function (x) {
            return Number(x)
        }),
        numberOfMoves = Number(arr[4]);

    var starSystem = function (name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    };

    for (var i = 0; i < 3; i++) {
        var splitLine = arr[i].split(' ').filter(function (x) {
            return !!x
        });
        systems.push(new starSystem(splitLine[0], Number(splitLine[1]), Number(splitLine[2])));
    }

    printPosition(normandy);

    for (i = 0; i < numberOfMoves; i++) {
        normandy[1]++;
        printPosition(normandy)
    }

    function printPosition(position) {
        var shipX = position[0];
        var shipY = position[1];
        for (var index in systems) {
            if (shipX <= systems[index].x + 1 && shipX >= systems[index].x - 1) {
                if (shipY <= systems[index].y + 1 && shipY >= systems[index].y - 1) {
                    console.log(systems[index].name.toLowerCase());
                    return;
                }
            }
        }

        console.log('space');
    }
}
