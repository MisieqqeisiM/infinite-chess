import { getPiece, getTreePiece } from "./Patterns.js";

export default class Chunk {

    constructor(gl, x, y, size = 16) {
        this.x = x
        this.y = y
        this.size = size
        this.data = new Uint8Array(size * size)

        // store gl for later updates to the highlight texture
        this.gl = gl

        // per-tile highlight data (0 or 255)
        this.highlightData = new Uint8Array(size * size)

        for (let dx = 0; dx < size; dx++) {
            for (let dy = 0; dy < size; dy++) {

                const x = (this.x * size + dx);
                const y = (this.y * size + dy);
                this.data[dy * size + dx] = getTreePiece(x, y);
            }
        }

        this.texture = gl.createTexture()

        gl.bindTexture(gl.TEXTURE_2D, this.texture)

        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.LUMINANCE,
            size,
            size,
            0,
            gl.LUMINANCE,
            gl.UNSIGNED_BYTE,
            this.data
        )

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

        // create highlight texture (single-channel luminance, initially zeros)
        this.highlightTexture = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, this.highlightTexture)
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.LUMINANCE,
            size,
            size,
            0,
            gl.LUMINANCE,
            gl.UNSIGNED_BYTE,
            this.highlightData
        )
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

    }
    updateTexture() {
        const gl = this.gl
        gl.bindTexture(gl.TEXTURE_2D, this.texture)

        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.LUMINANCE,
            this.size,
            this.size,
            0,
            gl.LUMINANCE,
            gl.UNSIGNED_BYTE,
            this.data
        );
    }


    bind(gl, shader) {
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, this.texture)

        gl.uniform2f(
            gl.getUniformLocation(shader.program, "u_chunkPos"),
            this.x * this.size,
            this.y * this.size
        )

        gl.uniform1f(
            gl.getUniformLocation(shader.program, "u_chunkSize"),
            this.size
        )

        // bind highlight texture to texture unit 1
        gl.activeTexture(gl.TEXTURE1)
        gl.bindTexture(gl.TEXTURE_2D, this.highlightTexture)
        const loc = gl.getUniformLocation(shader.program, "u_highlightChunk")
        if (loc) gl.uniform1i(loc, 1)
    }

    // set highlight for a local tile (dx,dy in [0,size)) to truthy (true/false)
    setHighlightLocal(dx, dy, value) {
        if (dx < 0 || dy < 0 || dx >= this.size || dy >= this.size) return
        const idx = dy * this.size + dx
        const v = value ? 255 : 0
        this.highlightData[idx] = v
        // update single pixel in the GPU texture
        const pixel = new Uint8Array([v])
        const gl = this.gl
        gl.bindTexture(gl.TEXTURE_2D, this.highlightTexture)
        gl.texSubImage2D(gl.TEXTURE_2D, 0, dx, dy, 1, 1, gl.LUMINANCE, gl.UNSIGNED_BYTE, pixel)
    }

    // set highlight by world coordinates
    setHighlightWorld(worldX, worldY, value) {
        const localX = Math.floor(worldX) - (this.x * this.size)
        const localY = Math.floor(worldY) - (this.y * this.size)
        this.setHighlightLocal(localX, localY, value)
    }
}