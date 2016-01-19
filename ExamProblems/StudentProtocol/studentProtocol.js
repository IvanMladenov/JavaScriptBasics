//var test = [ 'Peter Jackson - Java : 350',
//    'Jane - JavaScript : 200',
//    'Jane     -    JavaScript :     400',
//    'Simon Cowell - PHP : 100',
//    'Simon Cowell-PHP: 500',
//    'Simon Cowell - PHP : 200' ];
//
//solve(test);

function solve(arr){
    var student = function(name, result){
        this.name = name;
        this.result = result;
        this.makeUpExams = 0;
    };
    var data = {};
    var keys = [];

    for (var i = 0; i < arr.length; i++) {
        var splitLine = arr[i].split(/[:-]/);
        var name = splitLine[0].trim();
        var exam = splitLine[1].trim();
        var result = Number(splitLine[2].trim());

        if (result<0||result>400){
            continue;
        }

        if (data[exam]===undefined){
            data[exam]=[];
            data[exam].push(new student(name, result));
            keys.push(exam);
        }else {
            var firstTime = true;
            for (var j = 0; j < data[exam].length; j++) {
                if (name===data[exam][j].name){
                    data[exam][j].result=Math.max(data[exam][j].result, result);
                    data[exam][j].makeUpExams++;
                    firstTime=false;
                    break;
                }
            }
            if (firstTime){
                data[exam].push(new student(name, result));
            }
        }
    }

    for (var i = 0; i < keys.length; i++) {
        data[keys[i]].sort(function(a, b){
            if (a.result=== b.result){
                if (a.makeUpExams=== b.makeUpExams){
                    return a.name.localeCompare(b.name);
                }else {
                    return a.makeUpExams> b.makeUpExams;
                }
            }else {
                return b.result> a.result;
            }
        });
    }

    console.log(JSON.stringify(data));
}