let gridContainer = document.querySelector(".cell-container");
let rangeInput = document.querySelector("#range");
let rangeLabel = document.querySelector("#range-label");
let currentColor = document.querySelector("#color");
let buttonContainer = document.querySelector(".button-container");
let clearBtn = document.querySelector("#clear");

let mouseDown = false;
let currentMode = null;
let size = rangeInput.value;

function getHue() {
    return Math.floor(Math.random() * 361)
};

function generateHslColor() {
    let hue = getHue();
    let randowColor = `hsl(${hue}, 100%, 50%)`;
    return randowColor;
};

function draw(cell, click) {
    if(mouseDown || click == "on") {
        if (currentMode == "draw") {
            cell.target.style.backgroundColor = `${currentColor.value}`; 
        };
        if(currentMode == "erase") {
            cell.target.style.backgroundColor = "initial";
        };
        if(currentMode == "randow") {
            cell.target.style.backgroundColor = generateHslColor();
        }
    };
    gridContainer.childNodes.forEach(cell => {
        cell.classList.remove("trasition")
        
    })
};

function activeDraw(cell) {
    draw(cell, "on");
};

function creatGrid(size) {
    gridContainer.innerHTML = "";
    gridContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.classList = "grid-item";
        gridContainer.appendChild(cell)
        cell.addEventListener("mouseover", draw)
        cell.addEventListener("mousedown", activeDraw)
    };
    rangeLabel.innerText = `${size} X ${size}`;
};

function clearGrid() {
   gridContainer.childNodes.forEach(cell => {
        cell.classList.add("trasition")
        cell.style.backgroundColor = "initial";
   })
};

function changeMode(mode) {
    if (mode == "draw") {
        currentMode = mode;
    }
    if(mode == "erase") {
        currentMode = mode;
    }
    if(mode == "randow") {
       currentMode = mode;
    }
};

function addActiveClass (e) {
    let btns = [...e.target.parentElement.children];
    btns.forEach(btn => {
    if (btn == e.target) {
        btn.classList.add("active")
    }else {
        btn.classList.remove("active")
    }  
    })
};

function selectMode(e) {
    if (e.target.matches("button")) {
        changeMode(e.target.id)
        if(e.target.id != "clear") {
            addActiveClass(e)
        }  
    }
};


buttonContainer.addEventListener("click", selectMode);
clearBtn.addEventListener("click", clearGrid);
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
range.oninput = (e) => creatGrid(e.target.value)
creatGrid(size);

let modeBtn = document.querySelector("#modeBtn");
let menu = document.querySelector("#hamMenu");

function showMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
    if(currentMode) {
        modeBtn.innerText = currentMode;
    }
};

document.body.onresize = () => {
    if(innerWidth > 600 ) {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    };
};

modeBtn.addEventListener('click', showMenu);
