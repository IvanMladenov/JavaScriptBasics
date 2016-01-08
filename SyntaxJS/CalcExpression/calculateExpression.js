function calculate(){
    var expression = document.getElementById('input').value;
    var result = eval(expression).toString();
    document.getElementById('output').innerHTML = result;

    return false;
}
