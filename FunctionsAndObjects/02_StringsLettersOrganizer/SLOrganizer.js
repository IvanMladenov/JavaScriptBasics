var inupt = 'HelloWorld';

console.log(sortLettersInString(inupt, true));
console.log(sortLettersInString(inupt, false));

function sortLettersInString(word, ascending){
    var array = word.split('');

    if (ascending){
        array.sort(function(a, b){return a.toLowerCase().localeCompare(b.toLowerCase());})
    }else {
        array.sort(function(a, b){return b.toLowerCase().localeCompare(a.toLowerCase());})
    }

    return array.join('');
}
