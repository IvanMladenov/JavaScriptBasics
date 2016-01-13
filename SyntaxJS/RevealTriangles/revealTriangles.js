//var input = ['abcdexgh',
//    'bbbdxxxh',
//    'abcxxxxx'
//];

//solve(input);

function solve(arr){

    var prev = arr[0];

    var result = [];
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        var forChange = arr[i];

        for (var j = 1; j < prev.length; j++) {
            if (j===current.length){
                break;
            }
            if (arr[i-1][j]===current[j-1]&&arr[i-1][j]===current[j]&&arr[i-1][j]===current[j+1]){
                if (prev[j]!=='*'){
                    prev = strReplace(prev, j, '*');
                }
                forChange = strReplace(forChange, j-1, '*');
                forChange = strReplace(forChange, j, '*');
                forChange = strReplace(forChange, j+1, '*');
            }
        }

        result.push(prev);

        prev=forChange;
    }

    result.push(prev);

    //console.log(result.join('\n'));

    return result.join('\n');

    function strReplace(str, index, character) {
        return str.substr(0, index) + character + str.substr(index+character.length);
    }
}
