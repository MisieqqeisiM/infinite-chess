attribute vec2 a_position;

uniform vec2 u_camera;
uniform float u_zoom;
uniform vec2 u_resolution;

uniform vec2 u_chunkPos;
uniform float u_chunkSize;

varying vec2 v_world;

void main() {

    vec2 world = u_chunkPos +
        (a_position * 0.5 + 0.5) * u_chunkSize;

    v_world = world;

    vec2 screen = (world - u_camera) * u_zoom;

    vec2 clip = screen / u_resolution * 2.0;

    gl_Position = vec4(clip, 0.0, 1.0);

}