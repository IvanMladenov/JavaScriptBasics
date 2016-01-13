//var input = '<a href="http://softuni.bg" class="new"></a>Forum</a></li><li><a class="href"onclick="go()" href= "#">Forum</a>';
//solve(input);

function solve (arr){

    var wholeText = '';
    for (var i = 0; i < arr.length; i++) {
        wholeText+=arr[i];
    }

    var re = new RegExp(/<a.*?href=\s*"(.+?)".*?<\/a>/g);
    var results = re.exec(wholeText);
    while (results!==null){
        console.log(results[1]);
        var results = re.exec(wholeText);
    }
}