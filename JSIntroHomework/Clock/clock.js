function timeClock(){
    var minutes = new Date().getMinutes().toString().length===2?new Date().getMinutes().toString():"0"+new Date().getMinutes().toString();
    var seconds = new Date().getSeconds().toString().length===2?new Date().getSeconds().toString():"0"+new Date().getSeconds().toString();
    var time = new Date().getHours().toString()+":"+minutes+":"+seconds;
    document.getElementById("time").innerHTML = time;
}

setInterval("timeClock()", 1);