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
    for (let i = 0; i < field.tile.length; i++ ) {
        for (let j = 0; j < field.tile[i].length; j++) {
            if (field.tile[i][j] > 0) {
                context.drawImage(img.tile[field.tile[i][j]], Math.floor(j * 40 - field.cameraPosition[0]), Math.floor(i * 40 - field.cameraPosition[1]))
            }
        }
    }

    let frame = Math.floor((animation.playerFrame % 16) / 8)
    context.drawImage(img.player[animation.playerDirection][frame], Math.floor(field.playerPositionCoord[0] - field.cameraPosition[0]), Math.floor(field.playerPositionCoord[1] - field.cameraPosition[1]))
}

function drawPlayerInfo() {
    context.fillStyle = 'White'
    context.fillRect(UI.playerInfo.rect[0], UI.playerInfo.rect[1], UI.playerInfo.rect[2], UI.playerInfo.rect[3])
    context.strokeRect(UI.playerInfo.rect[0], UI.playerInfo.rect[1], UI.playerInfo.rect[2], UI.playerInfo.rect[3])
    context.fillStyle = 'Black'
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText(`Paused`, UI.menu.textPause[0], UI.menu.textPause[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText(`Resume`, UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText(`Exit to title`, UI.menu.textExit[0], UI.menu.textExit[1])

    context.drawImage(img.arrow, UI.menu.arrow[selected.menu][0], UI.menu.arrow[selected.menu][1])
}