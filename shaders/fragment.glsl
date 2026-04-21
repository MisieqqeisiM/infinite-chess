precision highp float;

varying vec2 v_world;

uniform sampler2D u_chunk;
uniform sampler2D u_pieceAtlas;

uniform float u_chunkSize;
uniform vec2 u_chunkPos;

uniform float u_atlasCols;

// Highlighting uniforms:
// u_highlightType: 0 = none, 1 = rook (horizontal), 2 = bishop (diagonal), 3 = queen (both), 4 = knight
uniform float u_highlightType;
uniform vec2 u_highlightPos; // world tile coords to center rook/bishop/queen highlights on
uniform vec2 u_knightHighlights[8]; // up to 8 individual tile positions for knight highlights (world tile coords)
uniform float u_knightCount; // how many entries in u_knightHighlights are active (0-8)
uniform vec3 u_highlightColor;
uniform float u_highlightAlpha;

void main() {

    vec2 local = v_world - u_chunkPos;

    vec2 tile = floor(local);

    float boardX = mod(v_world.x, 2.0) - 1.0;
    float boardY = mod(v_world.y, 2.0) - 1.0;
    float board = boardX * boardY;

    vec3 color;

    if(board < 0.0)
        color = vec3(1.0);
    else
        color = vec3(0.89, 0.59, 0.85);

    vec2 tex = (tile + 0.5) / u_chunkSize;

    float piece = texture2D(u_chunk, tex).r * 255.0;
    bool black = false;

    if(piece > 0.0) {
        if(piece >= 7.0) {
            piece -= 6.0;
            black = true;
        }

        float id = piece - 1.0;

        vec2 tileUV = fract(local);

        float col = mod(id, u_atlasCols);

        vec2 atlasUV = vec2((col + tileUV.x) / u_atlasCols, 1.0 - tileUV.y);

        vec4 pieceColor = texture2D(u_pieceAtlas, atlasUV);
        if(black)
            pieceColor *= vec4(0.3, 0.3, 0.3, 1.0);

        color = mix(color, pieceColor.rgb, pieceColor.a);

    }

    // compute world tile coords for this fragment's tile
    vec2 tile_world = tile + u_chunkPos;

    // Highlight checking
    bool highlight = false;
    if(u_highlightType > 0.5) {
        float t = u_highlightType;
        if(abs(t - 1.0) < 0.5) {
            // Rook: horizontal line centered at u_highlightPos
            if(tile_world.y == floor(u_highlightPos.y))
                highlight = true;
        } else if(abs(t - 2.0) < 0.5) {
            // Bishop: diagonal
            vec2 hp = floor(u_highlightPos);
            vec2 d = tile_world - hp;
            if(abs(d.x) == abs(d.y))
                highlight = true;
        } else if(abs(t - 3.0) < 0.5) {
            // Queen: both rook (horizontal) and bishop (diagonal)
            vec2 hp = floor(u_highlightPos);
            vec2 d = tile_world - hp;
            if(tile_world.y == hp.y || abs(d.x) == abs(d.y))
                highlight = true;
        } else if(abs(t - 4.0) < 0.5) {
            // Knight: up to 8 singular positions
            for(int i = 0; i < 8; i++) {
                if(float(i) < u_knightCount) {
                    vec2 kh = floor(u_knightHighlights[i]);
                    if(all(equal(tile_world, kh))) {
                        highlight = true;
                        break;
                    }
                }
            }
        }
    }

    if(highlight) {
        color = mix(color, u_highlightColor, u_highlightAlpha);
    }

    gl_FragColor = vec4(color, 1.0);
}