import Renderer from "./core/Renderer.js"
import Camera from "./core/Camera.js"
import ChunkManager from "./core/ChunkManager.js"
import TextureAtlas from "./core/TextureAtlas.js"
import { EM, getPiece, getTreePiece, getExamplePiece, getLegalMoves } from "./core/Patterns.js"

// pick generator based on the HTML filename
const page = location.pathname.split('/').pop()
const generator = page === 'tree.html' ? getTreePiece
    : page === 'example.html' ? getExamplePiece
        : getPiece




const canvas = document.getElementById("canvas")

const renderer = new Renderer(canvas)
const atlas = new TextureAtlas(renderer.gl)
const camera = new Camera()
const chunks = new ChunkManager(renderer, generator)

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
renderer.setSelectedPiece(-1000, -1000) // no piece selected

let dragging = false
let moved = false
let lastX, lastY
let moveStartX, moveStartY;

let selectedPiece = null;
let selectedPiecePos = null;

// move history for undo/redo
const moves = []; // array of { from:[x,y], to:[x,y], piece, captured }
let historyIndex = 0; // points to next move (moves[0..historyIndex-1] applied)

function applyMove(move, forward) {
    // forward: perform the move (clear source, set destination to piece)
    // !forward: revert the move (restore source to piece, destination to captured)
    if (forward) {
        chunks.setPiece(move.from[0], move.from[1], EM);
        chunks.setPiece(move.to[0], move.to[1], move.piece);
    } else {
        chunks.setPiece(move.from[0], move.from[1], move.piece);
        chunks.setPiece(move.to[0], move.to[1], move.captured);
    }
    // clear any selection in the renderer after applying
    renderer.setSelectedPiece(-1000, -1000);
}

function recordMove(fromX, fromY, toX, toY, piece, captured) {
    // if we've undone some moves and then make a new move, drop the redo tail
    if (historyIndex < moves.length) moves.length = historyIndex;
    moves.push({ from: [fromX, fromY], to: [toX, toY], piece, captured });
    historyIndex++;
}

function undo() {
    if (historyIndex === 0) return;
    historyIndex--;
    const m = moves[historyIndex];
    applyMove(m, false);
    deselect();
}

function redo() {
    if (historyIndex >= moves.length) return;
    const m = moves[historyIndex];
    applyMove(m, true);
    historyIndex++;
    deselect();
}

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
    if (Math.abs(moveStartX - e.clientX) > 3 || Math.abs(moveStartY - e.clientY) > 3) {
        moved = true
    }
    if (!dragging) return

    const dx = e.clientX - lastX
    const dy = e.clientY - lastY

    camera.move(-dx / camera.zoom, dy / camera.zoom)

    lastX = e.clientX
    lastY = e.clientY
}
canvas.onwheel = e => {
    const zoomAmount = -e.deltaY * 0.001
    camera.zoom *= (1 + zoomAmount)
}

canvas.onclick = e => {
    if (moved) return;
    const x = Math.floor((e.clientX - canvas.clientWidth / 2) / camera.zoom + camera.x);
    const y = Math.floor((canvas.clientHeight / 2 - e.clientY) / camera.zoom + camera.y);

    if (selectedPiece == null || selectedPiecePos == null || selectedPiece == EM) {
        selectedPiece = chunks.getPiece(x, y)
        selectedPiecePos = [x, y]
        renderer.setSelectedPiece(x, y)
        // highlight legal moves for the selected piece
        if (selectedPiece !== EM) {
            const legalMoves = getLegalMoves(x, y, selectedPiece, (tx, ty) => chunks.getPiece(tx, ty))
            chunks.setHighlights(legalMoves)
        }
    } else {
        // perform move and record it
        const fromX = selectedPiecePos[0]
        const fromY = selectedPiecePos[1]
        const captured = chunks.getPiece(x, y)

        if (fromX === x && fromY === y) {
            deselect();
            return;
        }

        // record the move and apply it
        recordMove(fromX, fromY, x, y, selectedPiece, captured)
        const moveObj = { from: [fromX, fromY], to: [x, y], piece: selectedPiece, captured }
        applyMove(moveObj, true)

        deselect();

    }


}
function deselect() {
    selectedPiece = null;
    selectedPiecePos = null;
    renderer.setSelectedPiece(-1000, -1000)
    chunks.setHighlights([]) // clear all highlights
}

// keyboard shortcuts for undo/redo: Z = undo, R = redo
window.addEventListener('keydown', e => {
    const k = e.key.toLowerCase()
    if (k === 'z') undo()
    else if (k === 'r') redo()
})

function loop() {

    chunks.update(camera)

    renderer.render(chunks.getVisibleChunks())

    requestAnimationFrame(loop)
}

loop()