/**
 * Created by Ivan on 26.1.2016 г..
 */

function solve(arr){
    for (var i = 0; i < arr.length; i++) {
        var splitLine = arr[i].split(' '),
            car = splitLine[0],
            fuelType = splitLine[1],
            route = splitLine[2],
            luggage = Number(splitLine[3]),
            littersPerHundred,
            snowRoadConsuption,
            total;

        if (fuelType==='diesel'){
            littersPerHundred = 8 + luggage*0.01;
        }else if (fuelType==='gas'){
            littersPerHundred = 12 + luggage*0.01;
        }else {
            littersPerHundred = 10+ luggage*0.01;
        }

        if (route==='1'){
            total = (110*littersPerHundred)/100;
            snowRoadConsuption = (0.3*littersPerHundred*10)/100;
        }else {
            total = (95*littersPerHundred)/100;
            snowRoadConsuption = (0.3*littersPerHundred*30)/100;
        }

        splitLine[3] = Math.round(total+snowRoadConsuption);
        console.log(splitLine.join(' '));
    }
}
