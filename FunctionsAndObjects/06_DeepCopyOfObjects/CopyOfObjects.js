var a = {name: 'Pesho', age: 21};
var b = clone(a); // a deep copy
compareObjects(a, b);

var a = {name: 'Pesho', age: 21} ;
var b = a; // not a deep copy
compareObjects(a, b);

function compareObjects(a, b){
    console.log('a == b --> ' + (a==b));
}

function clone(oldObj){
    var newObj = {};
    for(var property in oldObj){
        newObj[property] = oldObj[property];
    }

    return newObj;
}
