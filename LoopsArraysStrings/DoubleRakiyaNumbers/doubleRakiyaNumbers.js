//
//var test = [55555, 55560];
//
//var result = solve(test);
//console.log(result);

function solve(arr) {
    var start = arr[0];
    var end = arr[1];

    var result = '<ul>' + '\n';

    for (var i = start; i <= end; i++) {
        var current = i.toString();
        var rakiaNumberFound = false;

        for (var k = 0; k < current.length - 1; k++) {
            var exponat = current[k].toString() + current[k + 1];
            for (var j = k + 2; j < current.length - 1; j++) {
                var forTest = current[j].toString() + current[j + 1];
                if (Number(exponat) - Number(forTest) === 0) {
                    rakiaNumberFound = true;
                }
            }
        }

        if (!rakiaNumberFound) {
            result += '<li><span class=\'num\'>' + current + '</span></li>' + '\n';
        } else {
            result += '<li><span class=\'rakiya\'>' + current + '</span><a href="view.php?id=' + current + '>View</a></li>' + '\n';
        }
    }

    return (result + '</ul>');
}
