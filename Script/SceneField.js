function loopField() {
    displayField()
}

function displayField() {
    drawSceneInit()
    drawField()

    context.strokeRect(UI.buttonMenu[0], UI.buttonMenu[1], UI.buttonMenu[2], UI.buttonMenu[3])
    context.strokeRect(UI.buttonPlayerInfo[0], UI.buttonPlayerInfo[1], UI.buttonPlayerInfo[2], UI.buttonPlayerInfo[3])

    if (pause === true) {
        drawMenu()
    }

    if (state === 'PlayerInfo') {
        drawPlayerInfo()
    }
}

function keyDownField(key) {

}

function keyUpField(key) {
    if (pause === false) {
        if (state === '') {
            if (key === 'Escape') {
                pause = true
            }

            if (key === 'i') {
                state = 'PlayerInfo'
            } 
        } else if (state === 'PlayerInfo') {
            if (key === 'i') {
                state = ''
            }
        }
    }
}

function mouseUpField(x, y, button) {
    if (button === 0) {
        if (pause === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonMenu)) {
                    pause = true
                } else if (pointInsideRectArray(x, y, UI.buttonPlayerInfo)) {
                    state = 'PlayerInfo'
                }
            } else if (state === 'PlayerInfo') {
            }
        }
    }
}

function mouseMoveField(x, y) {
    
}

function mouseDownField(x, y, button) {

}