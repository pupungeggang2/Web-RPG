function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'White'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawField() {
    context.fillRect(Math.floor(field.playerPositionCoord[0]), Math.floor(field.playerPositionCoord[1]), 40, 40)
}

function drawPlayerInfo() {
    context.fillStyle = 'White'
    context.fillRect(UI.playerInfo.rect[0], UI.playerInfo.rect[1], UI.playerInfo.rect[2], UI.playerInfo.rect[3])
    context.strokeRect(UI.playerInfo.rect[0], UI.playerInfo.rect[1], UI.playerInfo.rect[2], UI.playerInfo.rect[3])
    context.fillStyle = 'Black'
}

function drawMenu() {

}