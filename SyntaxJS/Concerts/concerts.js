//var input = [
//    'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
//    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
//    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
//    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
//    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
//    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
//    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
//    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
//    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
//    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
//    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
//    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
//];

//solve(input);

function solve(arr){

    var result = {};

    for (var i = 0; i < arr.length; i++) {
        var currentLine = arr[i].split(/[|]+/);
        var group = currentLine[0].trim();
        var city = currentLine[1].trim();
        //var date = new Date(currentLine[2]);
        var venue = currentLine[3].trim();

        if (!result[city]) {
            result[city] = {};
        }

        if (!result[city][venue]){
            result[city][venue] = [];
        }

        if (result[city][venue].indexOf(group)===-1){
            result[city][venue].push(group);
        }
    }

    var sortedResult = sortResult(result);
    console.log(JSON.stringify(sortedResult));

    function sortResult(result){
        var cityKeys = [];
        var venueKeys = [];

        for (var city in result){
            cityKeys.push(city);

            for (var venue in result[city]){
                venueKeys.push(venue);
                result[city][venue].sort();
            }

            venueKeys.sort();

            var insideArr = {};
            for (var i = 0; i < venueKeys.length; i++) {
                insideArr[venueKeys[i]] = result[city][venueKeys[i]];
            }

            result[city] = insideArr;
            venueKeys=[];
        }

        cityKeys.sort();
        var sorted = {};
        for (var i = 0; i < cityKeys.length; i++) {
            sorted[cityKeys[i]] = result[cityKeys[i]];
        }

        return sorted;
    }
}