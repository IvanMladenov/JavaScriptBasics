//var input = [
//'<table>',
//'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
//'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
//'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
//'<tr><td>Laptop Lenovo IdeaPad B5400</td><td>929.00</td><td>0</td></tr>',
//'<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
//'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
//'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
//'</table>'
//];
//
//solve(input);

function solve(arr) {
    var rows = [];

    for (var i = 2; i < arr.length-1; i++) {
        var currentLine = arr[i];
        var re = /<tr><td>.*?<\/td><td>(.+?)<\/td>/g;
        var mach = re.exec(currentLine);
        var price = Number(mach[1]);
        rows.push({price:price, data:currentLine});
    }

    rows = rows.sort(function (a, b) {
        if (a.price != b.price) {
            return a.price - b.price;
        } else {
            return a.data == b.data ? 0 : a.data < b.data ? -1 : 1;
        }
    });

    console.log(arr[0]);
    console.log(arr[1]);

    for (i = 0; i < rows.length; i++) {
        console.log(rows[i].data);
    }

    console.log(arr[arr.length-1]);
}
