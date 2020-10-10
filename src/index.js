import { Application, SCALE_MODES, settings, Text, TilingSprite } from 'pixi.js'

settings.SCALE_MODE = SCALE_MODES.NEAREST

const app = new Application({
    width: 480,
    height: 270
})
app.view.id = 'app_canvas'

const canvasContainer = document.getElementById('canvas_container')
canvasContainer.appendChild(app.view)

const welcomeMessage = new Text('joebinney.com', {
    fontFamily: 'monospace',
    fontSize: 50,
    fill: 0xffffff
})
welcomeMessage.anchor.set(0.5, 0.5)
welcomeMessage.position.set(app.view.width/2, app.view.height/2)
app.stage.addChild(welcomeMessage)