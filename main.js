import Renderer from "./core/Renderer.js"
import Camera from "./core/Camera.js"
import ChunkManager from "./core/ChunkManager.js"
import TextureAtlas from "./core/TextureAtlas.js"




const canvas = document.getElementById("canvas")

const renderer = new Renderer(canvas)
const atlas = new TextureAtlas(renderer.gl)
const camera = new Camera()
const chunks = new ChunkManager(renderer)

await atlas.load([
    "king",
    "queen",
    "rook",
    "bishop",
    "knight",
    "pawn"
]);

renderer.setAtlas(atlas)
renderer.setCamera(camera)

let dragging = false
let lastX, lastY

canvas.onmousedown = e => {
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
}

canvas.onmouseup = () => dragging = false

canvas.onmousemove = e => {
    if (!dragging) return

    const dx = e.clientX - lastX
    const dy = e.clientY - lastY

    camera.move(-dx / camera.zoom, dy / camera.zoom)

    lastX = e.clientX
    lastY = e.clientY
}

canvas.onwheel = e => {
    camera.zoom *= e.deltaY > 0 ? 0.9 : 1.1
}

function loop() {

    chunks.update(camera)

    renderer.render(chunks.getVisibleChunks())

    requestAnimationFrame(loop)
}

loop()