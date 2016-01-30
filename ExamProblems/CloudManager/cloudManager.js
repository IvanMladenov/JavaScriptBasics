/**
 * Created by Ivan on 30.1.2016 г..
 */

function solve(arr){
    var output = {},
        keys = [],
        fileObject = function(){
            this.files = [];
            this.memory = 0;
        };

    for (var i = 0; i < arr.length; i++) {
        var splitLine = arr[i].split(/\s+/).filter(function(x){return !!x}),
            mb = splitLine[2].substring(0, splitLine[2].length-2),
            memory = Number(mb);

        if (!output[splitLine[1]]){
            output[splitLine[1]] = new fileObject();
            keys.push(splitLine[1]);
        }

        output[splitLine[1]].files.push(splitLine[0]);
        output[splitLine[1]].memory+=memory;
    }

    keys.sort();
    output = outputSort(output);

    console.log(JSON.stringify(output));

    function outputSort(array){
        var sorted = {};

        for (var i = 0; i < keys.length; i++) {
            var current = new fileObject();
            current.memory = array[keys[i]].memory.toFixed(2);
            current.files = array[keys[i]].files.sort();
            sorted[keys[i]] = current;
        }

        return sorted;
    }
}