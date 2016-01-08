function calcSupply(age, maxAge, favFood, amountPerDay){
    var remainingYears = maxAge-age;
    var totalAmountOfFood = remainingYears*365*amountPerDay;
    console.log(totalAmountOfFood+"kg of " + favFood + " would be enough until I am " + maxAge + " years old.");
}

calcSupply(38, 118, "chocolate", 0.5);
calcSupply(20, 87, "fruits", 2);
calcSupply(16, 102, "nuts", 1.1);