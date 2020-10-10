import { Application, SCALE_MODES, settings, Sprite } from 'pixi.js'

import roomUrl from 'url:/images/room.png'


settings.SCALE_MODE = SCALE_MODES.NEAREST

const app = new Application({
    width: 480,
    height: 270
})
app.view.id = 'app_canvas'

const canvasContainer = document.getElementById('canvas_container')
canvasContainer.appendChild(app.view)

app.loader.add(roomUrl)
    .load((loader, resources) => {
        const room = new Sprite(resources[roomUrl].texture)
        app.stage.addChild(room)
    })