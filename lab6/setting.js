
function get_color(e) {
    e.target.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
}

let counter_n = 0;
let mouseOver = false;

function counter_increment(e) {
    mouseOver = true;
    console.log(mouseOver);
    counter_n += 1;
    counter.textContent = (counter_n).toString();
}

function mouseOut(e) {
    mouseOver = false;
    console.log(mouseOver);
}


const square = document.getElementById("square");
square.addEventListener("click", get_color);

const counter = document.getElementById("counter");
counter.textContent = counter_n.toString();
counter.addEventListener("mouseenter", counter_increment);
counter.addEventListener("mouseleave", mouseOut);

const list = document.getElementById("list");
const listButton = document.getElementById("list_button");

let listExist = true;

function listButtonFunc(e) {
    if (list.style.display == 'block')
        list.style.display = 'none';
    else
        list.style.display = 'block';
}

listButton.addEventListener("click", listButtonFunc);
