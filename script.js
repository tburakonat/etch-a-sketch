let gridItems = []
let mousedown

function createGrid(columns) {
    let userInput = columns || prompt("How many columns do you want (max. 64)")
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

    colorGridItems()
}

function colorGridItems() {
    gridItems = [...document.getElementsByClassName("grid-item")]
    gridItems.forEach(item => {
        item.addEventListener("click", (e) => {
            lightenColor(e)
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
    if ( mousedown || e.type === "click") { // mousedown is a custom variable
        const {randomB, randomG, randomR} = createNewColor()
        
        e.target.style.backgroundColor = `rgba(${randomR},${randomG},${randomB})`
    }
}

function lightenColor(e) {
    const prevOpacity = window.getComputedStyle(e.target).opacity
    const backgroundColor = window.getComputedStyle(e.target).backgroundColor
    
    if (backgroundColor === "rgba(51, 51, 51, 0.1)") {
        const {randomB, randomG, randomR} = createNewColor()
    
        e.target.style.backgroundColor = `rgba(${randomR},${randomG},${randomB})`
    }
    
    if (prevOpacity > 0) {
        const newOpacity = prevOpacity - 0.1
        e.target.style.opacity = newOpacity
    } else {
        const {randomB, randomG, randomR} = createNewColor()
    
        e.target.style.backgroundColor = `rgba(${randomR},${randomG},${randomB})`
        e.target.style.opacity = prevOpacity + 1
    }
}

function createNewColor() {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)

    return {
        randomR,
        randomG,
        randomB,
    }
}

window.addEventListener("load", () => {
    createGrid(16)
})

const gridButton = document.getElementById("create-grid")

gridButton.addEventListener("click", () => {
    createGrid()
})