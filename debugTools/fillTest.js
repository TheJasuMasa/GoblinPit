INITIAL_AP = 5
ORIGIN = [7, 7]
ITERATOR = 0

//Utility Functions
function generateGrid(width, height) {
    let xArray = []
    for (let i = 0; i < width; i++) {
        let yArray = []
        for (let j = 0; j < height; j++) {
            yArray.push(new Tile(0, [i, j],  1))
        }
        xArray.push(yArray)
    }
    return xArray
}

function setAllAdjacentAP(grid, x, y, amt, reinit) {
    displayGrid(grid.getAP(), ITERATOR)
    ITERATOR++
    //console.log(`iteration # ${ITERATOR}`)
    if (reinit === true && amt >= 1 && grid.grid[x][y].APremaining < amt) {
        console.log('------ REINITILIZING ------- ')
        reinit = false
        //amt = INITIAL_AP

        grid.setLocalAP(x, y, amt)
        const adjTiles = grid.grid[x][y].getRelativePos()
        
        console.log(`iteration # ${ITERATOR}`)
        console.log('Starting tile : ' + JSON.stringify(grid.grid[x][y]))
        console.log('All adjacent tiles: ' +  JSON.stringify(adjTiles))
        console.log('Current ap: ' + JSON.stringify(amt))
        console.log('AP-Cost of next tile: ' + JSON.stringify(grid.grid[[adjTiles[0][0]]][[adjTiles[0][1]]].apCost))
        console.log('Next tile being grabbed: ' + JSON.stringify(adjTiles[0]))
        console.log('AP REMAINING ' + grid.grid[x][y].APremaining)
        adjTiles.forEach(coord => {
            const newAmt = amt - grid.grid[coord[0]][coord[1]].apCost
            setAllAdjacentAP(grid, coord[0], coord[1], newAmt, reinit)
        })
    }
    else if ((amt >= 1 && grid.grid[x][y].APremaining < amt && reinit === false)) {
        console.log('------ ITERATING ------')
        grid.setLocalAP(x, y, amt)
        const adjTiles = grid.grid[x][y].getRelativePos()
        console.log(`iteration # ${ITERATOR}`)
        console.log('Starting tile : ' + JSON.stringify(grid.grid[x][y]))
        console.log('All adjacent tiles: ' +  JSON.stringify(adjTiles))
        console.log('Current ap: ' + JSON.stringify(amt))
        console.log('AP-Cost of next tile: ' + JSON.stringify(grid.grid[[adjTiles[0][0]]][[adjTiles[0][1]]].apCost))
        console.log('Next tile being grabbed: ' + JSON.stringify(adjTiles[0]))
        console.log('AP REMAINING ' + grid.grid[x][y].APremaining)
        adjTiles.forEach(coord => {
            if (coord[0] === ORIGIN[0] && coord[1] === ORIGIN[1]) {
                console.log ('----- BACK AT SQUARE ONE -----')
                console.log ('-- Cause ' + JSON.stringify(coord[0]) + ' and ' + JSON.stringify(coord[1]) + ' are origin points --')
                reinit = true
            }
            else {
            //else if (grid.grid)[coord[0]][coord[1]].apCost
            //console.log(' REININT is ' + JSON.stringify(reinit) + ' because ' + JSON.stringify(coord[0]) +' and ' +JSON.stringify(coord[1]) + ' are not at origin')
            const newAmt = amt - grid.grid[coord[0]][coord[1]].apCost
            setAllAdjacentAP(grid, coord[0], coord[1], newAmt, reinit)
            }
        })
    } else if (amt <= 0 && grid.grid[x][y].APremaining === 0 && reinit === false) {
        console.log('------ EXCEPTING ------')
        console.log(`iteration # ${ITERATOR}`)
        console.log('Starting tile : ' + JSON.stringify(grid.grid[x][y]))
        console.log('AP REMAINING ' + grid.grid[x][y].APremaining)
        amt > 1 ? console.log('collision') : console.log('none left')
        reinit = true
    }
    else{console.log('nothing happened')}
}

//Class Declarations
class Tile {
    constructor(APremaining, position, apCost) {
        this.APremaining = APremaining
        this.position = position
        this.apCost = apCost
    }

    getRelativePos() {
        //North, East, South, West
        return [
            [this.position[0], this.position[1] + 1],
            [this.position[0] + 1, this.position[1]],
            [this.position[0], this.position[1] - 1],
            [this.position[0] - 1, this.position[1]]
        ]
    }
}


class Grid {
    constructor(width, height) {
        this.gridHeight = height
        this.gridWidth = width
        this.grid = generateGrid(width, height)
        this.apVals = this.getAP()
        this.apCosts = this.setGlobalAP(1)
    }

    getAP() {
        let returnArray = []
        for (let i = 0; i < this.gridHeight; i++) {
            returnArray.push(this.grid[i].reduce((acc, tile) => {
                if (acc) {
                    return [...acc, tile.APremaining]
                } else if (!acc) {
                    acc.push(tile.APremaining)
                }
            }, []))

        }
        return returnArray
    }

    getAPCost() {
        let returnArray = []
        for (let i = 0; i < this.gridHeight; i++) {
            returnArray.push(this.grid[i].reduce((acc, tile) => {
                if (acc) {
                    return [...acc, tile.apCost]
                } else if (!acc) {
                    acc.push(tile.apCost)
                }
            }, []))

        }
        return returnArray
    }

    setGlobalAP(val) {
        let returnArray = []
        for (let i = 0; i < this.gridHeight; i++) {
            returnArray.push(this.grid[i].reduce((acc, tile) => {
                if (acc) {
                    return [...acc, tile.APremaining + val]
                } else if (!acc) {
                    acc.push(tile.APremaining + val)
                }
            }, []))

        }
        return returnArray
    }

    setLocalAP(x, y, amt) {
        this.grid[x][y].APremaining = amt;
    }

}

//HTML shit
function displayGrid(grid, iterator) {
    const body = document.querySelector('body')
    const iteration = document.createElement('h2')
    iteration.textContent = iterator.toString()
    body.appendChild(iteration)
    if (grid.grid) {

        grid.grid.forEach(line => {
            const display = document.createElement('div')
            display.textContent = JSON.stringify(line)
            body.appendChild(display)
        })
    }
    else {
        grid.forEach(line => {
            const display = document.createElement('div')
            display.textContent = JSON.stringify(line)
            body.appendChild(display)
        })
        body.appendChild(document.createElement('br'))
    }
}

const grid = new Grid(15, 15)
grid.grid[7][7].apCost = 5
for (let i = 0; i < grid.grid[6].length;i++){
    grid.grid[6][i].apCost = 7
    
}
displayGrid(grid.getAPCost(), ITERATOR)
setAllAdjacentAP(grid, ORIGIN[0], ORIGIN[1], INITIAL_AP, true)
displayGrid(grid, ITERATOR)