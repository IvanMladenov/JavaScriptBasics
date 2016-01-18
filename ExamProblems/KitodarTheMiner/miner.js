var input = [
'    mine mina - golD : 5',
'mine mina: gold: 5'
];

solve(input);

function solve(arr){
    var result = {
        'silver':0,
        'gold':0,
        'diamonds':0
    };

    for (var i = 0; i < arr.length; i++) {

        var regex = /mine.+(silver|gold|diamonds)\s*:\s*(\d+)[ "]*/g;
        var match;

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