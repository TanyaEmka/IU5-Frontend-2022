
function get_color(e) {
    e.target.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
}

let counter_n = 0;
let mouseOver = true;

function counter_increment(e) {
    if (mouseOver == true) {
        console.log(mouseOver);
        counter_n += 1;
        counter.textContent = (counter_n).toString();
    }
}

function mouseOut(e) {
    mouseOver = false;
    console.log(mouseOver);
}

function mouseEnter(e) {
    mouseOver = true;
}


const square = document.getElementById("square");
square.addEventListener("click", get_color);

const counter = document.getElementById("counter");
counter.textContent = counter_n.toString();
counter.addEventListener("mouseover", () => setInterval(counter_increment, 500));
counter.addEventListener("mouseout", mouseOut);
counter.addEventListener("mouseenter", mouseEnter);

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

function circleClick(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    circle.style.marginTop = (y).toString() + "px"; 
    circle.style.marginLeft = (x).toString() + "px";
    console.log(circle.style.marginTop, y, x);
}

let esc_c = false;

const circle = document.getElementById("circle");
circle.addEventListener("click", function(e) {
    esc_c = false;
});

const borders = document.getElementById("borders");
borders.onmousemove = function (e) {
    if (esc_c == false) {
        circle.style.position = 'fixed';
        circle.style.left = e.clientX + -20 + 'px';
        circle.style.top = e.clientY + -20 + 'px';
    }
}

document.addEventListener("keydown", function(e) {
    if (e.code == "Escape") {
        console.log("esc");
        esc_c = true;
    }
});
