var input = [
    {
        'name': 'Пешо',
        'score': 91
    },
    {
        'name': 'Лилия',
        'score': 290
    },
    {
        'name': 'Алекс',
        'score': 343
    },
    {
        'name': 'Габриела',
        'score': 400
    },
    {
        'name': 'Жичка',
        'score': 70
    }
];

input.forEach(function (element) {
    element.score *= 1.1;
    element.hasPassed = element.score > 100 ? true : false;
});

var filtered = input.filter(function(element){
    return element.hasPassed === true;
});

console.log(filtered.sort(function(a, b){
    return a.name > b.name;
}));

