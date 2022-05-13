let gridItems = []
let mousedown

function createGrid(columns) {
    let userInput = columns || prompt("How many columns do you want")
    if (!userInput || userInput > 64) {
        userInput = 16
    }

    const gridContainer = document.getElementById("grid-container")

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    for (let i = 0; i < (userInput * userInput); i++) {
        const div = document.createElement("div")
        div.classList.add("grid-item")
        gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
        gridContainer.append(div)
    }
    gridItems = [...document.getElementsByClassName("grid-item")]
    gridItems.forEach(item => {
        item.addEventListener("click", (e) => {
            toggleColor(e)
        })
        item.addEventListener("mousedown", (e) => {
            mousedown = true
        })
        item.addEventListener("mouseup", (e) => {
            mousedown = false
        })
        item.addEventListener("mouseover", (e) => {
            toggleColor(e)
        })
    })
}

function toggleColor(e) {
    if (mousedown || e.type === "click") {
        e.target.classList.toggle("colored")
    }
}

window.addEventListener("load", () => {
    createGrid(16)
})

const gridButton = document.getElementById("create-grid")

gridButton.addEventListener("click", () => {
    createGrid()
})