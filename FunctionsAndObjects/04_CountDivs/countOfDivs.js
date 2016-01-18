//Just open HTML file. This script can be atached to any html document to count divs//

var html = document.documentElement.innerHTML;

countDivs(html);

function countDivs(html){
    html = html.replace(/[\n\s+]/g, '');
    var regex = /<\/div>/g;
    var count = 0;
    var match;

    while (match=regex.exec(html)){
        count++;
    }

    alert('Number of divs: ' + count);
}
