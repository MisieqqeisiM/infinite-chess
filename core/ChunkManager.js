import Chunk from "./Chunk.js"

export default class ChunkManager {

    constructor(renderer, chunkGenerator = undefined) {
        this.renderer = renderer
        this.gl = renderer.gl
        this.chunks = new Map()
        this.viewDistance = 6
        // optional generator function (x,y) => piece id used when creating new chunks
        this.generator = chunkGenerator
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
            // pass the optional generator down to Chunk; Chunk will fall back to its own default
            const chunk = new Chunk(this.gl, x, y, 16, this.generator)
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

    /**
     * Set the highlighted tiles. `tiles` is an array of [worldX, worldY].
     * Clears all previous highlights, then sets the new ones.
     */
    setHighlights(tiles) {
        // clear all existing highlights
        for (const chunk of this.chunks.values()) {
            chunk.highlightData.fill(0)
            const gl = chunk.gl
            gl.bindTexture(gl.TEXTURE_2D, chunk.highlightTexture)
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, chunk.size, chunk.size, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, chunk.highlightData)
        }
        // set new highlights
        for (const [wx, wy] of tiles) {
            const cx = Math.floor(wx / 16)
            const cy = Math.floor(wy / 16)
            const chunk = this.getChunk(cx, cy)
            chunk.setHighlightWorld(wx, wy, true)
        }
    }

    getVisibleChunks() {
        return this.chunks.values()
    }
}