let gridContainer = document.querySelector(".grid-container");
let gridArea = gridContainer.clientWidth * gridContainer.clientHeight;
let range = document.querySelector("#range");
let rangeArea;


range.addEventListener("input", function() {
    gridContainer.innerHTML = ""
    let label = document.querySelector("#range-label");
    label.innerText = `${range.value}x${range.value}`
    rangeArea = Math.sqrt( gridArea / (range.value**2));
    console.log(rangeArea)
    rangeArea += "px"

    for (let i = 1; i <= range.value**2; i++) {
        let div = document.createElement("div");
        div.classList = "grid-item";
        div.style.width = rangeArea;
        div.style.height = rangeArea;
        gridContainer.appendChild(div)
    }

} )

