Array.prototype.removeItem = function(item){
    var newArr = [];

    for (var i = 0; i < this.length; i++) {
        if (this[i]!==item){
            newArr.push(this[i]);
        }
    }

    return newArr;
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log('array items: ' + arr);
var removed = arr.removeItem(1);
console.log('after remove: ' + removed);

arr = ['hi', 'bye', 'hello' ];
console.log('array items: ' + arr);
removed = arr.removeItem('bye');
console.log('after remove: ' + removed);


