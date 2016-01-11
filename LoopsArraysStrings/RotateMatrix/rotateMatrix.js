function solve(arr){

    var degrees = parseInt(arr[0].match(/\d+/));

    var matrix = [[]];
    var width = 0;
    var height = arr.length-1;

    for (var i = 1; i < arr.length; i++) {
        var line = arr[i];
        matrix[i-1]=(line.split(''));
        if (width<line.length){
            width = line.length;
        }
    }

    var numberOfRotations = (degrees/90)%4;

    for (var i = 1; i <= numberOfRotations; i++) {
        matrix = rotate(matrix, width, height);
        var temp = width;
        width = height;
        height = temp;
    }

    return printMatrix(matrix);


    function printMatrix(matrix){
        var output ='';
        for (var i = 0; i < matrix.length; i++) {

            output+=(matrix[i].join(""));
            if (i!=matrix.length-1){
                output+='\n';
            }
        }

        return output;
    }

    function rotate(matrix, width, height){

        var newMatrix = [[]];

        for (var i = 0; i < width; i++) {
            var currentArr = [];
            for (var j = height-1; j >=0; j--) {

                var currentChar = (matrix[j][i]);
                currentChar === undefined?currentArr.push(' '):currentArr.push(currentChar);
            }
            newMatrix[i] = currentArr;
        }

        return newMatrix;
    }
}
