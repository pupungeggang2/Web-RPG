function movePlayer() {
    if (animation.playerMoving === false) {
        let tempPosition = [field.playerPositionTile[0], field.playerPositionTile[1]]

        if (pressed['Up'] === true) {
            animation.playerDirection = 'U'
            tempPosition[0] -= 1

            if (tempPosition[0] >= 0 && tempPosition[0] < field.tile.length && tempPosition[1] >= 0 && tempPosition[1] < field.tile[0].length) {
                if (field.wall[tempPosition[0]][tempPosition[1]] === 0) {
                    animation.playerMoving = true
                    animation.playerFrame = 0
                    field.playerPositionTile = [tempPosition[0], tempPosition[1]]
                }
            }
        } else if (pressed['Left'] === true) {
            animation.playerDirection = 'L'
            tempPosition[1] -= 1

            if (tempPosition[0] >= 0 && tempPosition[0] < field.tile.length && tempPosition[1] >= 0 && tempPosition[1] < field.tile[0].length) {
                if (field.wall[tempPosition[0]][tempPosition[1]] === 0) {
                    animation.playerMoving = true
                    animation.playerFrame = 0
                    field.playerPositionTile = [tempPosition[0], tempPosition[1]]
                }
            }
        } else if (pressed['Down'] === true) {
            animation.playerDirection = 'D'
            tempPosition[0] += 1

            if (tempPosition[0] >= 0 && tempPosition[0] < field.tile.length && tempPosition[1] >= 0 && tempPosition[1] < field.tile[0].length) {
                if (field.wall[tempPosition[0]][tempPosition[1]] === 0) {
                    animation.playerMoving = true
                    animation.playerFrame = 0
                    field.playerPositionTile = [tempPosition[0], tempPosition[1]]
                }
            }
        } else if (pressed['Right'] === true) {
            animation.playerDirection = 'R'
            tempPosition[1] += 1

            if (tempPosition[0] >= 0 && tempPosition[0] < field.tile.length && tempPosition[1] >= 0 && tempPosition[1] < field.tile[0].length) {
                if (field.wall[tempPosition[0]][tempPosition[1]] === 0) {
                    animation.playerMoving = true
                    animation.playerFrame = 0
                    field.playerPositionTile = [tempPosition[0], tempPosition[1]]
                }
            }
        }
    } else {
        animation.playerFrame += 1

        if (animation.playerDirection === 'U') {
            animation.playerMoveDistance += 120 * delta / 1000
            field.playerPositionCoord[1] -= 120 * delta / 1000
        } else if (animation.playerDirection === 'L') {
            animation.playerMoveDistance += 120 * delta / 1000
            field.playerPositionCoord[0] -= 120 * delta / 1000
        } else if (animation.playerDirection === 'D') {
            animation.playerMoveDistance += 120 * delta / 1000
            field.playerPositionCoord[1] += 120 * delta / 1000
        } else if (animation.playerDirection === 'R') {
            animation.playerMoveDistance += 120 * delta / 1000
            field.playerPositionCoord[0] += 120 * delta / 1000
        }

        if (animation.playerMoveDistance > 40) {
            animation.playerMoveDistance = 0
            animation.playerMoving = false
            field.playerPositionCoord[0] = field.playerPositionTile[1] * 40
            field.playerPositionCoord[1] = field.playerPositionTile[0] * 40
        }
    }
}

function fieldInit() {
    field.place = 'HomeTown' // Needs to be modified
    field.playerPositionCoord = [0, 0]
    field.playerPositionTile = [0, 0]
    field.cameraPosition = [0, 0]

    loadField(field.place)
}

function loadField(place) {
    field.place = place
    field.tile = JSON.parse(JSON.stringify(dataField[place]['Tile']))
    field.wall = JSON.parse(JSON.stringify(dataField[place]['Wall']))
    field.thing = JSON.parse(JSON.stringify(dataField[place]['Thing']))
}

function gameInit() {

}