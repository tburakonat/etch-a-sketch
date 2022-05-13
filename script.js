function createGrid(columns) {
    let userInput = columns || prompt("How many columns do you want")
    userInput > 40 ? userInput = 40 : userInput
    const gridContainer = document.getElementById("grid-container")

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    for (let i = 0; i < (userInput * userInput); i++) {
        const div = document.createElement("div")
        gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 15px)`
        gridContainer.append(div)
    }
}

window.addEventListener("load", () => {
    createGrid(16)
})

const gridButton = document.getElementById("create-grid")

gridButton.addEventListener("click", () => {
    createGrid()
})