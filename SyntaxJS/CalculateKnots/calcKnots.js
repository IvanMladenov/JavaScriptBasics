function convertKmToKnots(kmPerHour){
    var result = kmPerHour/1.852;
    console.log(result.toFixed(2));
}

convertKmToKnots(20);
convertKmToKnots(112);
convertKmToKnots(400);