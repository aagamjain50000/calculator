const txt = document.getElementById("txt")

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
const aa = txt.value;

function backspace() {
    aa.pop()
    console.log(aa)
}