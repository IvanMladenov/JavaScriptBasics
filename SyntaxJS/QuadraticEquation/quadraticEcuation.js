function findRoots(a, b , c){
    var discriminant = b*b -4*a*c;
    if (discriminant<0){
        return "No real roots";
    } else {
        var firstRoot = (-b - Math.sqrt(discriminant))/(2*a);
        var secondRoot = (-b + Math.sqrt(discriminant))/(2*a);

        if(firstRoot===secondRoot){
            return "X = " + firstRoot.toString();
        }else {
            return "X1 = " + firstRoot.toString() + "\n" + "X2 = " + secondRoot.toString();
        }
    }
}

console.log(findRoots(2, 5, -3));
console.log(findRoots(2, -4, 2));
console.log(findRoots(4, 2, 1));
