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

    getVisibleChunks() {
        return this.chunks.values()
    }
}