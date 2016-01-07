function calcArea(r){
    return Math.PI * (r * r);
}

document.getElementById("first-radius").innerHTML=calcArea(7);
document.getElementById("second-radius").innerHTML=calcArea(1.5);
document.getElementById("third-radius").innerHTML=calcArea(20);

