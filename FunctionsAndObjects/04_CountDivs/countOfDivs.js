var html = [
    "<!DOCTYPE html>",
    "<html>",
    "<head lang=\"en\">",
    "<meta charset=\"UTF-8\">",
    "<title>index</title>",
    "<script src=\"/yourScript.js\" defer></script>",
    "</head>",
    "<body>",
    "<div id=\"outerDiv\">",
    "<div",
    "class=\"first\">",
    "<div><div>hello</div></div>",
    "</div>",
    "<div>hi<div></div></div>",
    "<div>I am a div</div>",
    "</div>",
    "</body>",
    "</html>"
];

countDivs(html);

function countDivs(html){
    var htmlAsString = html.map(function(x){return x.trim()}).join('');
    var regex = /<\/div>/g;
    var count = 0;
    var match;

    while (match=regex.exec(htmlAsString)){
        count++;
    }

    console.log(count);
}
