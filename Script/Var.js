let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = 'Load'
let pause = false

let pressed = {
    'Up' : false, 'Left' : false, 'Down' : false, 'Right' : false
}

let selected = {
    title : 0,
    menu : 0
}

let sessionVar = {
    
}

let animation = {
    playerMoveDistance : 0,
    playerMoving : false,
    playerDirection : 'S'
}

let field = {
    place : 'HomeTowm',
    playerPositionCoord : [],
    playerPositionTile : [],
    tile : [

    ],

    wall : [

    ],

    thing : [

    ]
}

let player = {
}

let game = {
    
}