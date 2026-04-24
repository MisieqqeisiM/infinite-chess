precision highp float;

varying vec2 v_world;

uniform sampler2D u_chunk;
uniform sampler2D u_pieceAtlas;

uniform float u_chunkSize;
uniform vec2 u_chunkPos;

uniform float u_atlasCols;
uniform vec2 u_selectedPiece;

// highlight dot texture (per-tile) and dot params
uniform sampler2D u_highlightChunk; // bound to texture unit 1

void main() {

    vec2 local = v_world - u_chunkPos;

    vec2 tile = floor(local);

    // fractional position inside the tile (0..1)
    vec2 tileUV = fract(local);

    float boardX = mod(v_world.x, 2.0) - 1.0;
    float boardY = mod(v_world.y, 2.0) - 1.0;
    float board = boardX * boardY;

    vec3 color;

    if(board < 0.0)
        color = vec3(1.0);
    else
        color = vec3(1.0, 0.8, 0.9);

    vec2 tex = (tile + 0.5) / u_chunkSize;

    float piece = texture2D(u_chunk, tex).r * 255.0;
    bool black = false;

    if(piece > 0.0) {
        if(piece >= 7.0) {
            piece -= 6.0;
            black = true;
        }

        float id = piece - 1.0;

        float col = mod(id, u_atlasCols);
        if(u_selectedPiece.x != floor(v_world.x) || u_selectedPiece.y != floor(v_world.y)) {
            tileUV = tileUV * 1.2 - 0.1;
        }

        if(tileUV.x > 0.0 && tileUV.x < 1.0 && tileUV.y > 0.0 && tileUV.y < 1.0) {
            vec2 atlasUV = vec2((col + tileUV.x) / u_atlasCols, 1.0 - tileUV.y);

            vec4 pieceColor = texture2D(u_pieceAtlas, atlasUV);
            if(black)
                pieceColor *= vec4(0.3, 0.3, 0.3, 1.0);

            color = mix(color, pieceColor.rgb, pieceColor.a);
        }

    }

    float u_highlightDotRadius = 0.3;
    // sample per-tile highlight texture and draw a dot in the tile center
    float h = texture2D(u_highlightChunk, tex).r;
    if(h > 0.5) {
        // grey dot for empty squares, red dot for occupied squares
        vec3 u_highlightDotColor = (piece > 0.0) ? vec3(0.8, 0.1, 0.1) : vec3(0.0, 0.0, 0.0);
        float u_highlightDotAlpha = (piece > 0.0) ? 0.9 : 0.2;
        float dist = distance(tileUV, vec2(0.5));
        float dotAlpha = 1.0 - smoothstep(u_highlightDotRadius - 0.02, u_highlightDotRadius + 0.02, dist);
        color = mix(color, u_highlightDotColor, dotAlpha * u_highlightDotAlpha);
    }

    gl_FragColor = vec4(color, 1.0);
}