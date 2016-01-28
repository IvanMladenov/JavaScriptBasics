/**
 * Created by Ivan on 28.1.2016 г..
 */

function solution(arr){
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i],
            reg = /<p>(.+?)<\/p>/g,
            match = reg.exec(line),
            output = '';


        while ((match != null)){
            var current = match[1].toString();
            current = current.replace(/[^a-z\d]+/g, ' ');
            current = current.replace(/\s{2,}/g, ' ');

            for (var j = 0; j < current.length; j++) {
                var code =current[j].charCodeAt(0);
                if (current[j]!=' '){
                    if (code>109){
                        code-=13;
                    }else {
                        code+=13;
                    }
                }

                output+=String.fromCharCode(code);
            }

            match =  reg.exec(line);
        }

        console.log(output);
    }
}