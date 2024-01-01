let img = {
    arrow : new Image(),

    button : {
        menu : new Image(),
        info : new Image(),
    },

    tile : {
        1 : new Image(),
        2 : new Image(),
    },

    player : {
        'U' : [new Image(), new Image()],
        'L' : [new Image(), new Image()],
        'D' : [new Image(), new Image()],
        'R' : [new Image(), new Image()]
    }
}

function imageLoad() {
    img.arrow.src = 'Image/Arrow.png'

    img.button.menu.src = 'Image/Button/Menu.png'
    img.button.info.src = 'Image/Button/Info.png'

    img.tile[1].src = 'Image/Tile/Grass.png'
    img.tile[2].src = 'Image/Tile/Dirt.png'

    img.player['U'][0].src = 'Image/Thing/PlayerUp01.png'
    img.player['U'][1].src = 'Image/Thing/PlayerUp02.png'
    img.player['L'][0].src = 'Image/Thing/PlayerLeft01.png'
    img.player['L'][1].src = 'Image/Thing/PlayerLeft02.png'
    img.player['D'][0].src = 'Image/Thing/PlayerDown01.png'
    img.player['D'][1].src = 'Image/Thing/PlayerDown02.png'
    img.player['R'][0].src = 'Image/Thing/PlayerRight01.png'
    img.player['R'][1].src = 'Image/Thing/PlayerRight02.png'
}