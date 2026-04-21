export default class Shader {
    constructor(gl, vertexSrc, fragmentSrc) {
        this.gl = gl
        const vs = this.compile(gl.VERTEX_SHADER, vertexSrc)
        const fs = this.compile(gl.FRAGMENT_SHADER, fragmentSrc)
        this.program = gl.createProgram()
        gl.attachShader(this.program, vs)
        gl.attachShader(this.program, fs)
        gl.linkProgram(this.program)

    }

    compile(type, src) {
        const gl = this.gl
        const shader = gl.createShader(type)
        gl.shaderSource(shader, src)
        gl.compileShader(shader)
        return shader
    }

    use() {
        this.gl.useProgram(this.program)
    }
}