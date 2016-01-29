/**
 * Created by Ivan on 29.1.2016 г..
 */

//var input = [ 'ab**l5', 'bBb*555', 'absh*5', 'ttHHH', 'ttth' ];
//
//solve(input);


function solve(arr){
    var output = [],
        model = [];

    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].split(''),
            lowerCaseLine = arr[i].toLowerCase().split('');
        model.push(lowerCaseLine);
        output.push(line);
    }

    for (var i = 0; i < output.length-2; i++) {
        for (var j = 0; j < output[i].length-2; j++) {
            if (model[i][j]===model[i][j+2]&&
                model[i][j]===model[i+1][j+1]&&
                model[i][j]===model[i+2][j]&&
                model[i][j]===model[i+2][j+2]){

                output[i][j] = ' ';
                output[i][j+2] = ' ';
                output[i+1][j+1] = ' ';
                output[i+2][j+2] = ' ';
                output[i+2][j] = ' ';
            }
        }
    }

    output.forEach(function(x){
        var outputLine='';
        x.forEach(function(y){
            if (y!=' '){
                outputLine+=y;
            }
        });
        console.log(outputLine);
    });
}
