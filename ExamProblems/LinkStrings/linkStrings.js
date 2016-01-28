/**
 * Created by Ivan on 29.1.2016 г..
 */

function solve(arr){
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].replace(/%20/g, ' ').replace(/\+/g, ' ').replace(/\s+/g, ' ');
        var splited = line.split(/[?&]+/g);
        var output = {};

        for (var index in splited){
            if (splited[index].indexOf('=')!=-1){
                var keyValue = splited[index].split(/=/g),
                    key = keyValue[0].trim(),
                    value = keyValue[1].trim();
                if (!output[key]){
                    output[key] = [];
                    output[key].push(value);
                }else {
                    output[key].push(value);
                }
            }
        }

        var forPrint = '';

        for (var index in output){
            forPrint+= index+'=[' + output[index].join(', ') + ']';
        }

        console.log(forPrint);
    }
}
