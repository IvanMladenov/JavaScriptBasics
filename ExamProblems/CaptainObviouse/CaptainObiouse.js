//var input = ["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
//    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."];
//
//solve(input);

function solve(arr){
    var words = {};
    var firstSequence = arr[0].split(/[^\w]+/);
    for (var i = 0; i < firstSequence.length; i++) {
        var currentWord = firstSequence[i].toLowerCase();
        if (currentWord!=='') {
            if (words[currentWord] === undefined) {
                words[currentWord] = 1;
            } else {
                words[currentWord]++;
            }
        }
    }

    var repeatingWords = [];
    for(var word in words){
        if (words[word]>=3){
            repeatingWords.push(word);
        }
    }

    if (repeatingWords.length===0){
        console.log('No words');
        return;
    }

    var regex = /[A-Z].+?[?!.]/g;
    var match;
    var sentenceMatched = false;

    while (match=regex.exec(arr[1])){
        var currentSequence = match[0];
        var counter = 0;
        for (var i = 0; i < repeatingWords.length; i++) {
            var currentReg =new RegExp('[^a-zA-Z]' + repeatingWords[i] + '[^a-zA-Z]', 'i');
            var wordMatch;
            if (wordMatch=currentReg.exec(currentSequence)){
                counter++;
            }

            if (counter>=2){
                console.log(currentSequence);
                sentenceMatched = true;
                break;
            }
        }
    }

    if (!sentenceMatched){
        console.log("No sentences");
    }
}

