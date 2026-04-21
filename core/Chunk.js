import { getPiece } from "./Patterns.js";

export default class Chunk {

    constructor(gl, x, y, size = 16) {
        this.x = x
        this.y = y
        this.size = size
        this.data = new Uint8Array(size * size)

        for (let dx = 0; dx < size; dx++) {
            for (let dy = 0; dy < size; dy++) {

                const x = (this.x * size + dx);
                const y = (this.y * size + dy);
                this.data[dy * size + dx] = getPiece(x, y);
            }
        }

        for (let i = 0; i < this.data.length; i++) {
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
    }
}