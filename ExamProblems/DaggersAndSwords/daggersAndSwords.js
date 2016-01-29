/**
 * Created by Ivan on 29.1.2016 г..
 */

function solve(arr) {
    var output = ['<table border="1">', '<thead>', '<tr><th colspan="3">Blades</th></tr>', '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>', '</thead>', '<tbody>'];

    for (var i = 0; i < arr.length; i++) {
        var current = Math.floor(Number(arr[i]));

        if (current > 10) {
            var application,
                type;
            if (current > 40) {
                type = 'sword';
                application = getApp(current % 5);
            } else {
                type = 'dagger';
                application = getApp(current % 5);
            }

            var row = '<tr><td>' + current + '</td><td>' + type + '</td><td>' + application + '</td></tr>';
            output.push(row);
        }
    }
    output.push('</tbody>');
    output.push('</table>');
    console.log(output.join('\n'));

    function getApp(size) {
        switch (size) {
            case 1:
                return 'blade';
                break;
            case 2:
                return 'quite a blade';
                break;
            case 3:
                return 'pants-scraper';
                break;
            case 4:
                return 'frog-butcher';
                break;
            default:
                return '*rap-poker';
                break;
        }
    }
}