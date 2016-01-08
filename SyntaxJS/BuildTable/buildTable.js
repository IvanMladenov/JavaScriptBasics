function Solve(arr){
    var start = Number(arr[0]);
    var end = Number(arr[1]);

    var prev = 1;
    var current = 1;
    while (current<start){
        var next = prev + current;
        prev = current;
        current = next;
    }

    var result = '<table> '+' \n '+' <tr><th>Num</th><th>Square</th><th>Fib</th></tr>' + '\n';

    for (var i = start; i <=end; i++) {
        var finbonachiNumber;
        if (i===current){
            finbonachiNumber = 'yes';
            var next = prev + current;
            prev = current;
            current = next;
        }else {
            finbonachiNumber = 'no';
        }
        var currentLine = '<tr><td>' + i + '</td><td>' + i*i + '</td><td>' + finbonachiNumber + '</td></tr>' + '\n';
        result+=currentLine;
    }

    result+='</table>';

    return result;
}
