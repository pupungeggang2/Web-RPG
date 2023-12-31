let canvas
let context

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = 'Load'
let pause = false

let inputKey = {
    'up' : false, 'left' : false, 'down' : false, 'right' : false
}

let selected = {
    title : 0
}

let sessionVar = {
    
}

let graphic = {
    playerMove : 0,
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