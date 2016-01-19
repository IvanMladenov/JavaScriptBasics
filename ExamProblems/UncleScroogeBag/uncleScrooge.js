function solve(arr){
    var coins = 0;

    for (var i = 0; i < arr.length; i++) {
        var re = /^coin\s*?(\d+)[.]?[0]*$/gi;
        var mach;

        if (mach = re.exec(arr[i])){
            coins+=Number(mach[1]);
        }
    }

    var gold = 0;
    var silver = 0;

    if (coins>=100){
        gold = parseInt(coins/100);
        coins=coins%100;
    }

    if (coins>=10){
        silver=parseInt(coins/10);
        coins = coins%10;
    }

    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + coins);
}