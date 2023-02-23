// start button number
var input_number1 = document.getElementById("input_number1");
var input_number2 = document.getElementById("input_number2");
var resart = document.getElementById("resart");
var zero = document.getElementById("0");
var portion = document.getElementById("portion");
var hit = document.getElementById("hit");
var one = document.getElementById("1");
var tow = document.getElementById("2");
var three = document.getElementById("3");
var minus = document.getElementById("minus");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var plus = document.getElementById("plus");
var seven = document.getElementById("7");
var eait = document.getElementById("8");
var nine = document.getElementById("9");
var del = document.getElementById("del");
var equals = document.getElementById("equals");
// end button number
// start button click
plus.onclick = () => resart.value = +input_number1.value + +input_number2.value;
minus.onclick = () => resart.value = +input_number1.value - +input_number2.value;
hit.onclick = () => resart.value = +input_number1.value * +input_number2.value;
portion.onclick = () => resart.value = +input_number1.value / +input_number2.value;
input_number1.onclick = () => {
    zero.onclick = () => input_number1.value = "0" + input_number1.value;
    one.onclick = () => input_number1.value = "1" + input_number1.value;
    tow.onclick = () => input_number1.value = "2" + input_number1.value;
    three.onclick = () => input_number1.value = "3" + input_number1.value;
    four.onclick = () => input_number1.value = "4" + input_number1.value;
    five.onclick = () => input_number1.value = "5" + input_number1.value;
    six.onclick = () => input_number1.value = "6" + input_number1.value;
    seven.onclick = () => input_number1.value = "7" + input_number1.value;
    eait.onclick = () => input_number1.value = "8" + input_number1.value;
    nine.onclick = () => input_number1.value = "9" + input_number1.value;
    del.onclick = () => input_number1.value = "";
}

input_number2.onclick = () => {
    zero.onclick = () => input_number2.value = "0" + input_number2.value;
    one.onclick = () => input_number2.value = "1" + input_number2.value;
    tow.onclick = () => input_number2.value = "2" + input_number2.value;
    three.onclick = () => input_number2.value = "3" + input_number2.value;
    four.onclick = () => input_number2.value = "4" + input_number2.value;
    five.onclick = () => input_number2.value = "5" + input_number2.value;
    six.onclick = () => input_number2.value = "6" + input_number2.value;
    seven.onclick = () => input_number2.value = "7" + input_number2.value;
    eait.onclick = () => input_number2.value = "8" + input_number2.value;
    nine.onclick = () => input_number2.value = "9" + input_number2.value;
    del.onclick = () => input_number2.value = "";
}
// end button click