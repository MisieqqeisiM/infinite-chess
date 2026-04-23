import Chunk from "./Chunk.js"

export default class ChunkManager {

    constructor(renderer) {
        this.renderer = renderer
        this.gl = renderer.gl
        this.chunks = new Map()
        this.viewDistance = 6
    }

    key(x, y) {
        return x + "," + y
    }

    getPiece(x, y) {
        const cx = Math.floor(x / 16)
        const cy = Math.floor(y / 16)
        const chunk = this.getChunk(cx, cy)
        const dx = this.mod(x, 16)
        const dy = this.mod(y, 16)
        return chunk.data[dy * chunk.size + dx]
    }

    mod(n, m) {
        return ((n % m) + m) % m
    }

    getChunk(x, y) {
        const k = this.key(x, y)
        if (!this.chunks.has(k)) {
            const chunk = new Chunk(this.gl, x, y)
            this.chunks.set(k, chunk)
        }
        return this.chunks.get(k)
    }

    update(camera) {
        const cx = Math.floor(camera.x / 16)
        const cy = Math.floor(camera.y / 16)

        for (let x = -this.viewDistance; x <= this.viewDistance; x++) {
            for (let y = -this.viewDistance; y <= this.viewDistance; y++) {
                this.getChunk(cx + x, cy + y)
            }
        }

    }
    setPiece(x, y, piece) {
        const cx = Math.floor(x / 16)
        const cy = Math.floor(y / 16)
        const chunk = this.getChunk(cx, cy)
        const dx = this.mod(x, 16)
        const dy = this.mod(y, 16)
        chunk.data[dy * chunk.size + dx] = piece
        chunk.updateTexture()
    }

    getVisibleChunks() {
        return this.chunks.values()
    }
}