// start button number
var h1_number = document.getElementById("h1_number");
var not_number = document.getElementById(".");
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
var resart = document.getElementById("resart");
var del = document.getElementById("del");
var equals = document.getElementById("equals");
// end button number
// start button click
not_number.onclick = () => h1_number.textContent = +"." + h1_number.textContent;
zero.onclick = () => h1_number.textContent = "0" + h1_number.textContent;
portion.onclick = () => h1_number.textContent = "/" + h1_number.textContent;
hit.onclick = () => h1_number.textContent = "*" + h1_number.textContent;
one.onclick = () => h1_number.textContent = "1" + h1_number.textContent;
tow.onclick = () => h1_number.textContent = "2" + h1_number.textContent;
three.onclick = () => h1_number.textContent = "3" + h1_number.textContent;
minus.onclick = () => h1_number.textContent = "-" + h1_number.textContent;
four.onclick = () => h1_number.textContent = "4" + h1_number.textContent;
five.onclick = () => h1_number.textContent = "5" + h1_number.textContent;
six.onclick = () => h1_number.textContent = "6" + h1_number.textContent;
plus.onclick = () => h1_number.textContent = "+" + h1_number.textContent;
seven.onclick = () => h1_number.textContent = "7" + h1_number.textContent;
eait.onclick = () => h1_number.textContent = "8" + h1_number.textContent;
nine.onclick = () => h1_number.textContent = "9" + h1_number.textContent;
resart.onclick = () => h1_number.textContent = h1_number.textContent.slice(0, -1);
del.onclick = () => h1_number.textContent = "";
// end button click
// start function
equals.onclick = function () {
    let array_calc = h1_number.textContent.split("");
    for (let i = 0; i < array_calc.length; i++) {
        switch (array_calc[i]) {
            case "+":
                let resart = 0;
                let array_calc = h1_number.textContent.split("");
                for (let x = 0; x < array_calc.length; x++) {
                    if (isNaN(parseInt(array_calc[x])) == false) {
                        resart += parseInt(+array_calc[x]);
                        h1_number.textContent = resart;
                    }
                }
                continue;
            case "-":
                let resart1 = 0;
                let array_calc1 = h1_number.textContent.split("");
                for (let x = 0; x < array_calc1.length; x++) {
                    if (isNaN(parseInt(array_calc1[x])) == false) {
                        resart1 -= parseInt(+array_calc1[x]);
                        h1_number.textContent = resart1;
                    }
                }
                continue;
            case "*":
                let resart2 = 1;
                let array_calc2 = h1_number.textContent.split("");
                for (let x = 0; x < array_calc2.length; x++) {
                    if (isNaN(parseInt(array_calc2[x])) == false) {
                        resart2 *= parseInt(+array_calc2[x]);
                        h1_number.textContent = resart2;
                    }
                }
                continue;
            case "/":
                let resart3 = 1;
                let array_calc3 = h1_number.textContent.split("");
                for (let x = 0; x < array_calc3.length; x++) {
                    if (isNaN(parseInt(array_calc3[x])) == false) {
                        resart3 /= parseInt(+array_calc3[x]);
                        h1_number.textContent = resart3;
                    }
                }
                continue;
        }
    }
}
// end function