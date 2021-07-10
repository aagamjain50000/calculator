const txt = document.getElementById("txt")
const dark = document.getElementById('dark')
const calc = document.getElementById("calc")

function dis(val) {
    txt.value += val
}

function clr() {
    txt.value = ''
}

function solve() {
    a = txt.value;
    b = eval(a);
    txt.value = b
}

function backspace() {
    aa = txt.value.slice(0, -1)
    txt.value = aa;
}

function darkness() {
    calc.classList.toggle("dark-theme");
}