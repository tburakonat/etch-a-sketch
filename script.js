function createGrid() {
    const userInput = prompt("How many columns do you want")
    for (let i = 0; i < (userInput * userInput); i++) {
        const gridContainer = document.getElementById("grid-container")
        const div = document.createElement("div")
        gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 15px)`
        gridContainer.append(div)
    }
}