let forwardArrow = document.getElementById("forward");
let backwardArrow = document.getElementById("backward");
let elem = document.getElementById("gallery");
let pos = 0;
let move = elem.offsetWidth - elem.scrollWidth;
elem.style.overflow = 'visible';

let id = setInterval(updateView, 5);
let status = 'none';
function setMoveStatus(dir) {
    status = dir;
}
function updateView() {
    if (pos > move && status === 'forward') {
        pos--;
    } else if (pos < 0 && status === 'backward') {
        pos++;
    }
    elem.style.left = pos + 'px'; 
}