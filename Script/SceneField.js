function loopField() {
    movePlayer()
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
    if (pause === false) {
        if (state === '') {
            if (key === 'ArrowUp' || key === 'w') {
                pressed['Up'] = true
            } else if (key === 'ArrowLeft' || key === 'a') {
                pressed['Left'] = true
            } else if (key === 'ArrowDown' || key === 's') {
                pressed['Down'] = true
            } else if (key === 'ArrowRight' || key === 'd') {
                pressed['Right'] = true
            }
        }
    }
}

function keyUpField(key) {
    if (pause === false) {
        if (state === '') {
            if (key === 'Escape') {
                pause = true
                selected.menu = 0
            }

            if (key === 'i') {
                state = 'PlayerInfo'
            }

            if (key === 'ArrowUp' || key === 'w') {
                pressed['Up'] = false
            } else if (key === 'ArrowLeft' || key === 'a') {
                pressed['Left'] = false
            } else if (key === 'ArrowDown' || key === 's') {
                pressed['Down'] = false
            } else if (key === 'ArrowRight' || key === 'd') {
                pressed['Right'] = false
            }            
        } else if (state === 'PlayerInfo') {
            if (key === 'i') {
                state = ''
            }
        }
    } else if (pause === true) {
        if (key === 'ArrowUp' || key === 'w') {
            if (selected.menu > 0) {
                selected.menu -= 1
            }
        } else if (key === 'ArrowDown' || key === 's') {
            if (selected.menu < 1) {
                selected.menu += 1
            }
        } else if (key === 'Enter') {
            if (selected.menu === 0) {
                pause = false
                selected.menu = 0
            } else if (selected.menu === 1) {
                pause = false
                selected.menu = 0
                scene = 'Title'
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
        } else if (pause === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                pause = false
                selected.menu = 0
            } else if (pointInsideRectArray(x, y, UI.menu.buttonExit)) {
                pause = false
                selected.menu = 0
                scene = 'Title'
                state = ''
            }
        }
    }
}

function mouseMoveField(x, y) {
    
}

function mouseDownField(x, y, button) {

}