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
// start click
document.addEventListener("keydown", (ele) => {
    ele.keyCode == 96 ? resart.value = "0" + resart.value : ele.keyCode == 46 ? resart.value = "" : ele.keyCode == 97 ? resart.value = "1" + resart.value :
        ele.keyCode == 99 ? resart.value = "3" + resart.value : ele.keyCode == 100 ? resart.value = "4" + resart.value : ele.keyCode == 101 ? resart.value = "5"
            + resart.value : ele.keyCode == 102 ? resart.value = "6" + resart.value : ele.keyCode == 103 ? resart.value = "7" + resart.value : ele.keyCode == 104
                ? resart.value = "8" + resart.value : ele.keyCode == 105 ? resart.value = "9" + resart.value : ele.keyCode == 107 ? resart.value = "+" + resart.value
                    : ele.keyCode == 109 ? resart.value = "-" + resart.value : ele.keyCode == 106 ? resart.value = "*" + resart.value : ele.keyCode == 111 ? resart.value = "/" + resart.value : "";
});

// end click
// start button click
zero.onclick = () => resart.value = "0" + resart.value;
one.onclick = () => resart.value = "1" + resart.value;
tow.onclick = () => resart.value = "2" + resart.value;
three.onclick = () => resart.value = "3" + resart.value;
four.onclick = () => resart.value = "4" + resart.value;
five.onclick = () => resart.value = "5" + resart.value;
six.onclick = () => resart.value = "6" + resart.value;
seven.onclick = () => resart.value = "7" + resart.value;
eait.onclick = () => resart.value = "8" + resart.value;
nine.onclick = () => resart.value = "9" + resart.value;
del.onclick = () => resart.value = "";
plus.onclick = () => resart.value = "+" + resart.value;
minus.onclick = () => resart.value = "-" + resart.value;
portion.onclick = () => resart.value = "/" + resart.value;
hit.onclick = () => resart.value = "*" + resart.value;
// end button click