export default class TextureAtlas {

    constructor(gl, size = 128) {

        this.gl = gl
        this.cellSize = size

        this.images = []
        this.map = new Map()

    }

    async load(names) {

        for (const name of names) {

            const img = new Image()
            img.src = `img/${name}.png`

            await img.decode()

            this.images.push(img)
            this.map.set(name, this.images.length - 1)

        }

        this.createAtlas()

    }

    createAtlas() {

        const gl = this.gl

        const cols = this.images.length
        const width = cols * this.cellSize
        const height = this.cellSize

        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext("2d")

        for (let i = 0; i < this.images.length; i++) {

            ctx.drawImage(
                this.images[i],
                i * this.cellSize,
                0,
                this.cellSize,
                this.cellSize
            )

        }

        this.texture = gl.createTexture()

        gl.bindTexture(gl.TEXTURE_2D, this.texture)

        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            canvas
        )

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

        this.columns = this.images.length
    }

    bind(unit = 1) {
        const gl = this.gl
        gl.activeTexture(gl.TEXTURE0 + unit)
        gl.bindTexture(gl.TEXTURE_2D, this.texture)
    }
}