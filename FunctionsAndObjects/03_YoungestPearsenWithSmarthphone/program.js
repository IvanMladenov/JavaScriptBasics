var people = [
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false },
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    ];

var result = people.filter(function(pearson){if(pearson.hasSmartphone){return pearson}}).sort(function(a,b){return a.age- b.age;});

console.log('The youngest person is ' + result[0].firstname + ' ' + result[0].lastname);
