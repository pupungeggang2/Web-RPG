window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)
    window.addEventListener('mousedown', mouseDown, false)
    window.addEventListener('mousemove', mouseMove, false)
    window.addEventListener('mouseup', mouseUp, false)

    imageLoad()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16

    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Field') {
        loopField()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameFramePrevious = Date.now() - 16
    gameInstance = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Field') {
        keyDownField(key)
    } else if (scene === 'Game') {
        keydownGame(key)
    }

    if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Space') {
        event.preventDefault()
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Field') {
        keyUpField(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    }

    if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Space') {
        event.preventDefault()
    }
}

function mouseDown(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseDownTitle(x, y, button)
    } else if (scene === 'Field') {
        mouseDownField(x, y, button)
    } else if (scene === 'Game') {
        mouseDownGame(x, y, button)
    }
}

function mouseMove(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top

    if (scene === 'Title') {
        mouseMoveTitle(x, y)
    } else if (scene === 'Field') {
        mouseMoveField(x, y)
    } else if (scene === 'Game') {
        mouseMoveGame(x, y)
    }
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Field') {
        mouseUpField(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}