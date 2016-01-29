/**
 * Created by Ivan on 29.1.2016 г..
 */

function solve(arr){
    var final = [],
        digits = arr[0].split(/[^0-9]+/).filter(function(x){return !!x});

    digits.forEach(function(digit){
        var hex = Number(digit).toString(16).toUpperCase();
        switch (hex.length){
            case 1:
                final.push('0x000' + hex);
                break;
            case 2:
                final.push('0x00' + hex);
                break;
            case 3:
                final.push('0x0' + hex);
                break;
            default:
                final.push('0x' + hex);
                break;
        }
    });

    console.log(final.join('-'));
}