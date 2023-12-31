function movePlayer() {
    if (animation.playerMoving === false) {
        if (pressed['Up'] === true) {
            animation.playerMoving = true
            animation.playerDirection = 'U'
            field.playerPositionTile[0] -= 1
        } else if (pressed['Left'] === true) {
            animation.playerMoving = true
            animation.playerDirection = 'L'
            field.playerPositionTile[1] -= 1
        } else if (pressed['Down'] === true) {
            animation.playerMoving = true
            animation.playerDirection = 'D'
            field.playerPositionTile[0] += 1
        } else if (pressed['Right'] === true) {
            animation.playerMoving = true
            animation.playerDirection = 'R'
            field.playerPositionTile[1] += 1
        }
    } else {
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
    field.playerPositionCoord = [0, 0]
    field.playerPositionTile = [0, 0]
}

function gameInit() {

}