var resart = document.getElementById("resart");

function my_number(element) {
    resart.value += element;
}

function my_del() {
    resart.value = "";
}

function my_resault() {
    resart.value = eval(resart.value);
}