function CalcCylinderVolume(radius, height){
    var area = Math.PI*radius*radius;
    console.log((area*height).toFixed(3));
}

CalcCylinderVolume(2, 4);
CalcCylinderVolume(5, 8);
CalcCylinderVolume(12, 3);
