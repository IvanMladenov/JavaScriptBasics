function solve(arr){
    var numberOfJumps = Number(arr[0]);
    var lenghtOfTrack = Number(arr[1]);
    var fleas = [];

    for (var i = 2; i < arr.length; i++) {
        var line = arr[i].split(',');
        var currentFlea = {name:line[0].trim(), currentPosition:0, lenghtOfJump:Number(line[1].trim())};
        fleas.push(currentFlea);
    }

    for (i = 0; i < numberOfJumps; i++) {
        for (var j = 0; j < fleas.length; j++) {
            fleas[j].currentPosition+=fleas[j].lenghtOfJump;
            if (fleas[j].currentPosition >= lenghtOfTrack-1){
                printResult(fleas[j].name);
                return;
            }
        }
    }

    var winnerName;
    var maxDistance = -1;
    for (i = fleas.length-1; i >=0; i--) {
        if (fleas[i].currentPosition>maxDistance){
            maxDistance = fleas[i].currentPosition;
            winnerName = fleas[i].name;
        }
    }

    printResult(winnerName);

    function printResult(winner){
        var dies = "#";
        var dot = '.';
        
        console.log(newString(dies, lenghtOfTrack));
        console.log(newString(dies, lenghtOfTrack));
        for (i = 0; i < fleas.length; i++) {
            if (fleas[i].name===winner){
                if (fleas[i].currentPosition>=lenghtOfTrack){
                    fleas[i].currentPosition=lenghtOfTrack-1;
                }
            }
            var fleaChar = fleas[i].name[0].toUpperCase();
            var fleaTrack = newString(dot, fleas[i].currentPosition) + fleaChar + newString(dot, lenghtOfTrack-fleas[i].currentPosition-1);
            console.log(fleaTrack);
        }
        console.log(newString(dies, lenghtOfTrack));
        console.log(newString(dies, lenghtOfTrack));
        console.log('Winner: ' + winner);
    }

    function newString(symbol, count){
        var output = '';

        for (var i = 0; i < count; i++) {
            output+=symbol;
        }

        return output;
    }

}