//var input = [
//'    mine mina - golD : 5',
//'mine mina: gold: 5'
//];
//
//solve(input);

function solve(arr){
    var result = {
        'silver':0,
        'gold':0,
        'diamonds':0
    };


    var regex = /mine.+-\s*(gold|silver|diamonds)\s*:\s*(\d+)[ "]*/;
    var match;

    for (var i = 0; i < arr.length; i++) {


        if (match = regex.exec(arr[i].trim())){
            var material = match[1];
            var quantity = Number(match[2]);
            result[material]+=quantity;
        }
    }

    console.log('*Silver: ' + result['silver']);
    console.log('*Gold: ' + result['gold']);
    console.log('*Diamonds: ' + result['diamonds']);
}
