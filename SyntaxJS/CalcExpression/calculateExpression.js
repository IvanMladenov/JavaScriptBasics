function calculate(){
    var expression = document.getElementById('input').value;
    var result = eval(expression);
    document.getElementById('output').innerHTML = result.toString();

    return false;
}
