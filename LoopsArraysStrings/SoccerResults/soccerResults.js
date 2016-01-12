//var input = ['Germany / Argentina: 1-0',
//    'Brazil / Netherlands: 0-3',
//    'Netherlands / Argentina: 0-0',
//    'Brazil / Germany: 1-7',
//    'Argentina / Belgium: 1-0',
//    'Netherlands / Costa Rica: 0-0',
//    'France / Germany: 0-1',
//    'Brazil / Colombia: 2-1'
//]
//
//solve(input);

function solve(arr) {
    var data = {};

    for (var i = 0; i < arr.length; i++) {
        var currLine = arr[i];
        var splited = currLine.split(/[/:-]+/g).map(function(x){return x.trim()});
        var homeTeam = splited[0];
        var awayTeam = splited[1];

        if (!data[homeTeam]) {
            data[homeTeam] = {};
            data[homeTeam]['goalsScored'] = Number(splited[2]);
            data[homeTeam]['goalsConceded'] = Number(splited[3]);
            data[homeTeam]['matchesPlayedWith'] = [awayTeam];

        } else {
            data[homeTeam].goalsScored += Number(splited[2]);
            data[homeTeam].goalsConceded += Number(splited[3]);
            if (data[homeTeam]['matchesPlayedWith'].indexOf(awayTeam)===-1){
                data[homeTeam]['matchesPlayedWith'].push(awayTeam);
            }
        }

        if (!data[awayTeam]) {
            data[awayTeam] = {};
            data[awayTeam]['goalsScored'] = Number(splited[3]);
            data[awayTeam]['goalsConceded'] = Number(splited[2]);
            data[awayTeam]['matchesPlayedWith'] = [homeTeam];

        } else {
            data[awayTeam].goalsScored += Number(splited[3]);
            data[awayTeam].goalsConceded += Number(splited[2]);
            if (data[awayTeam]['matchesPlayedWith'].indexOf(homeTeam)===-1){
                data[awayTeam]['matchesPlayedWith'].push(homeTeam);
            }
        }

    }

    for (var index in data){
        data[index]['matchesPlayedWith'].sort();
    }

    var result = dateSorter(data);

    console.log(JSON.stringify(result));

    function dateSorter(data){
        var keys = [];

        for (var key in data){
            keys.push(key);
        }

        keys.sort();

        var sorted = {};
        for (var i = 0; i < keys.length; i++) {
            sorted[keys[i]] = data[keys[i]];

        }

        return sorted;
    }
}