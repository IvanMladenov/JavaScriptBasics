/**
 * Created by Ivan on 26.1.2016 г..
 */

function solve(arr) {
    var col,
        row = 0,
        wind = 0,
        simbols = '/|\\_~';

    function calculateWind(i) {
        for (var j = 0; j < arr[i + 1].length; j++) {
            if (arr[i + 1][j] === '<') {
                wind--;
            } else if (arr[i + 1][j] === '>') {
                wind++;
            }
        }
    }

    while (arr[row].indexOf('o')===-1){
        row++;
    }
    col = arr[row].indexOf('o');

    for (var i = row; i < arr.length; i++) {
        if (simbols.indexOf(arr[i][col]) != -1) {
            output(arr[i][col], i, col);
            return;
        }

        wind=0;
        calculateWind(i);
        col+=wind;
    }

    function output(simbol, row, col) {
        switch (simbol) {
            case '_':
                console.log('Landed on the ground like a boss!');
                console.log(row + ' ' + col);
                break;
            case '~':
                console.log('Drowned in the water like a cat!');
                console.log(row + ' ' + col);
                break;
            default:
                console.log('Got smacked on the rock like a dog!');
                console.log(row + ' ' + col);
                break;
        }

    }
}
