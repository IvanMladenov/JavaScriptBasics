var input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

var validScores = input.filter(function (number) {
    return number > 0 && number < 400
});
for (var index in validScores) {
    validScores[index] *= 0.8;
}

validScores.sort(function(a, b){
    return a-b;
});

console.log(validScores);