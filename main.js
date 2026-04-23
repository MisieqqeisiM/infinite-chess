import Renderer from "./core/Renderer.js"
import Camera from "./core/Camera.js"
import ChunkManager from "./core/ChunkManager.js"
import TextureAtlas from "./core/TextureAtlas.js"
import { EM } from "./core/Patterns.js"




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
let moved = false
let lastX, lastY
let moveStartX, moveStartY;

let selectedPiece = null;
let selectedPiecePos = null;

canvas.onmousedown = e => {
    dragging = true
    moved = false
    moveStartX = e.clientX
    moveStartY = e.clientY
    lastX = e.clientX
    lastY = e.clientY
}

canvas.onmouseup = () => dragging = false

canvas.onmousemove = e => {
    if (moveStartX - e.clientX > 3 || moveStartY - e.clientY > 3) {
        moved = true
    }
    if (!dragging) return

    const dx = e.clientX - lastX
    const dy = e.clientY - lastY

    camera.move(-dx / camera.zoom, dy / camera.zoom)

    lastX = e.clientX
    lastY = e.clientY
}

canvas.onclick = e => {
    if (moved) return;
    const x = Math.floor((e.clientX - canvas.clientWidth / 2) / camera.zoom + camera.x);
    const y = Math.floor((canvas.clientHeight / 2 - e.clientY) / camera.zoom + camera.y);

    if (selectedPiece == null || selectedPiece == EM) {
        selectedPiece = chunks.getPiece(x, y)
        selectedPiecePos = [x, y]
        renderer.setSelectedPiece(x, y)
    } else {
        chunks.setPiece(selectedPiecePos[0], selectedPiecePos[1], EM)
        chunks.setPiece(x, y, selectedPiece)
        selectedPiece = null;
        selectedPiecePos = null;
        renderer.setSelectedPiece(-1000, -1000)
    }


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