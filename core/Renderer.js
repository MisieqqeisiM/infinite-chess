import Shader from "./Shader.js"

import { loadShader } from "./ShaderLoader.js"

const vertex = await loadShader("../shaders/vertex.glsl")
const fragment = await loadShader("../shaders/fragment.glsl")

export default class Renderer {
    constructor(canvas) {
        this.canvas = canvas
        this.gl = canvas.getContext("webgl", {
            antialias: true,
            alpha: false,
            depth: false,
            stencil: false,
            powerPreference: "high-performance"
        });
        this.resize()
        window.addEventListener("resize", () => this.resize())
        this.shader = new Shader(this.gl, vertex, fragment)
        this.camera = null
        this.selectedPiece = [0, 0]
        this.initQuad()
    }

    setCamera(camera) {
        this.camera = camera
    }

    setAtlas(atlas) {
        this.atlas = atlas
    }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height)
    }

    initQuad() {
        const gl = this.gl
        const quad = new Float32Array([
            -1, -1,
            1, -1,
            1, 1,
            -1, -1,
            1, 1,
            -1, 1
        ])
        this.buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
        gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW)
    }

    setSelectedPiece(x, y) {
        this.selectedPiece = [x, y]
    }

    render(chunks) {
        const gl = this.gl
        gl.clearColor(0, 0, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)
        this.shader.use()
        this.atlas.bind(2)
        gl.uniform1i(
            gl.getUniformLocation(this.shader.program, "u_pieceAtlas"),
            2
        )
        gl.uniform1f(
            gl.getUniformLocation(this.shader.program, "u_atlasCols"),
            this.atlas.columns
        )
        const pos = gl.getAttribLocation(this.shader.program, "a_position")
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
        gl.enableVertexAttribArray(pos)
        gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)
        gl.uniform2f(
            gl.getUniformLocation(this.shader.program, "u_camera"),
            this.camera.x,
            this.camera.y
        )
        gl.uniform1f(
            gl.getUniformLocation(this.shader.program, "u_zoom"),
            this.camera.zoom
        )

        gl.uniform2f(
            gl.getUniformLocation(this.shader.program, "u_resolution"),
            this.canvas.width,
            this.canvas.height
        )

        gl.uniform2f(
            gl.getUniformLocation(this.shader.program, "u_selectedPiece"),
            this.selectedPiece[0],
            this.selectedPiece[1]
        )

        for (const chunk of chunks) {
            chunk.bind(gl, this.shader)
            gl.drawArrays(gl.TRIANGLES, 0, 6)
        }
    }

}