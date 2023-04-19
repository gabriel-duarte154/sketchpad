let gridContainer = document.querySelector(".cell-container");
let range = document.querySelector("#range");
let size = range.value;
let rangeLabel = document.querySelector("#range-label");
let currentColor = document.querySelector("#color");
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function changeColor(cell) {
    if (mouseDown) {
        cell.target.style.backgroundColor = `${currentColor.value}`
    }
};
function clickDraw(cell) {
    cell.target.style.backgroundColor = `${currentColor.value}`
};


range.oninput = (e) => reSize(e.target.value)


function reSize(size) {
    gridContainer.innerHTML = ""
    gridContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.classList = "grid-item";
        gridContainer.appendChild(cell)
        cell.addEventListener("mouseover", changeColor)
        cell.addEventListener("mousedown", clickDraw)
    };
    rangeLabel.innerText = `${size}X${size}`;
};

reSize(size);

