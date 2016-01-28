function solve (arr){
    var minDate = new Date(1900, 0, 1),
        maxDate = new Date(2015, 0, 1),
        middleDate = new Date(1973, 4, 25),
        biggestFan,
        biggestHater;

    for (var i = 0; i < arr.length; i++) {
        var splitedDate = arr[i].split('.');
        var dateToCheck = new Date(splitedDate[2], Number(splitedDate[1]) - 1, splitedDate[0]);

        if (dateToCheck>minDate&&dateToCheck<maxDate){
            if (dateToCheck>middleDate){
                if (biggestFan===undefined){
                    biggestFan = dateToCheck;
                }else if (biggestFan<dateToCheck){
                    biggestFan = dateToCheck;
                }
            }else {
                if (biggestHater===undefined){
                    biggestHater=dateToCheck;
                }else if (biggestHater>dateToCheck){
                    biggestHater = dateToCheck;
                }
            }
        }
    }

    if (biggestFan===undefined&&biggestHater===undefined){
        console.log('No result');
    }else if (biggestFan===undefined&&biggestHater!=undefined){
        console.log('The biggest hater of ewoks was born on ' + biggestHater.toDateString());
    }else if (biggestFan!=undefined&&biggestHater!=undefined){
        console.log('The biggest fan of ewoks was born on ' + biggestFan.toDateString());
        console.log('The biggest hater of ewoks was born on ' + biggestHater.toDateString());
    }else {
        console.log('The biggest fan of ewoks was born on ' + biggestFan.toDateString());
    }
}
