export default class Camera {
    constructor() {
        this.x = 0
        this.y = 0
        this.zoom = 40
    }

    move(dx, dy) {
        this.x += dx
        this.y += dy
    }
}