export const EM = 0;
export const WK = 1;
export const WQ = 2;
export const WR = 3;
export const WB = 4;
export const WN = 5;
export const WP = 6;
export const BK = 7;
export const BQ = 8;
export const BR = 9;
export const BB = 10;
export const BN = 11;
export const BP = 12;

export const CHAMBER = [
    [BP, EM, BP, EM, BP],
    [WP, EM, BK, EM, WP],
    [WP, EM, BP, EM, WP],
    [EM, EM, WP, EM, EM],
    [EM, EM, EM, EM, EM],
    [EM, EM, BP, EM, EM],
    [BP, EM, WP, EM, BP],
    [BP, EM, WK, EM, BP],
    [WP, EM, WP, EM, WP],
    [EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM],
    [EM, BP, EM, BP, EM],
    [BP, WP, EM, WP, EM],
    [WP, BB, EM, BP, EM],
    [BP, WB, BP, WP, EM],
    [WP, EM, WP, EM, EM],
];

export const WHITE_ROOT_NODE = [
    [EM, EM, EM, BP, EM, EM, EM],
    [EM, EM, BP, WP, EM, EM, EM],
    [EM, EM, WP, EM, EM, EM, EM],
    [BP, EM, BP, EM, WB, EM, BP],
    [BP, BB, BP, BB, EM, BP, WP],
    [BP, EM, BP, EM, BP, WP, EM],
    [WP, EM, WP, EM, WP, EM, EM],
];

export const BLACK_NODE = [
    [EM, EM, EM, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, BP, EM, WP, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, WP, EM, WP, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM],
    [BP, EM, WP, EM, WP, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM],
    [WP, EM, WP, EM, EM, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM],
    [WP, WB, WP, EM, BP, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM],
    [WP, EM, WP, EM, WP, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, WP, WB, WP, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, WP, EM, WP, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, EM, BP, EM, EM, EM, EM, EM, BP, EM, EM],
    [EM, EM, EM, EM, EM, EM, WP, EM, EM, EM, EM, EM, WP, BP, EM],
    [EM, EM, EM, EM, EM, BP, EM, BP, EM, BP, EM, EM, EM, WP, BP],
    [EM, EM, EM, EM, EM, BP, EM, WP, BB, BP, EM, EM, EM, EM, WP],
    [EM, EM, EM, EM, EM, BP, EM, BP, EM, BP, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, BP, EM, BP, EM, WP, EM, EM, BP, EM, EM],
    [EM, EM, EM, EM, EM, BP, EM, WP, EM, EM, EM, BP, WP, EM, EM],
    [EM, EM, EM, EM, EM, BP, EM, EM, EM, EM, BP, WP, EM, EM, EM],
    [EM, EM, EM, EM, EM, BP, EM, BP, EM, BP, WP, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, WP, EM, WP, EM, WP, EM, EM, EM, EM, EM],
];

export const WHITE_NODE = [
    [EM, EM, EM, EM, EM, BP, EM, BP, EM, BP, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, WP, EM, WP, EM, WP, BP, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, WP, EM, EM, EM, EM, WP, BP, EM, EM, EM],
    [EM, EM, EM, EM, EM, WP, EM, BP, EM, EM, EM, WP, BP, EM, EM],
    [EM, EM, EM, EM, EM, WP, EM, WP, EM, BP, EM, EM, WP, EM, EM],
    [EM, EM, EM, EM, EM, WP, EM, WP, EM, WP, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, WP, EM, BP, WB, WP, EM, EM, EM, EM, BP],
    [EM, EM, EM, EM, EM, WP, EM, WP, EM, WP, EM, EM, EM, BP, WP],
    [EM, EM, EM, EM, EM, EM, BP, EM, EM, EM, EM, EM, BP, WP, EM],
    [EM, EM, EM, EM, EM, EM, WP, EM, EM, EM, EM, EM, WP, EM, EM],
    [EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, BP, EM, BP, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, BP, BB, BP, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM],
    [BP, EM, BP, EM, BP, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM],
    [BP, BB, BP, EM, WP, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM],
    [BP, EM, BP, EM, EM, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM],
    [WP, EM, BP, EM, BP, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, BP, EM, BP, EM, BP, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, WP, EM, BP, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM],
    [EM, EM, EM, EM, WP, EM, EM, EM, EM, EM, EM, EM, EM, EM, EM],
];

const k = 40;

function nearestIntersection(x, y) {
    const n = Math.round((x - y) / k);
    const m = Math.round((x + y) / k);
    return [n, m];
}

function patternAt(pattern, patternX, patternY, x, y) {
    const dx = x - patternX;
    const dy = y - patternY;
    if (dx < 0 || dy < 0) return EM;
    if (dx >= pattern[0].length || dy >= pattern.length) return EM;
    return pattern[pattern.length - 1 - dy][dx];
}

function kingChamber(intersection, x, y) {
    if (x == 0 && y == 0) return BN;
    const [n, m] = intersection;
    const patternX = (n + m) / 2 * k;
    const patternY = (m - n) / 2 * k;
    return patternAt(CHAMBER, patternX + 1, patternY - 11, x, y);
}

function whiteRootNode(intersection, x, y) {
    const [n, m] = intersection;
    const patternX = (n + m) / 2 * k;
    const patternY = (m - n) / 2 * k;
    return patternAt(WHITE_ROOT_NODE, patternX - 4, patternY - 3, x, y);
}

function whiteNode(intersection, x, y) {
    const [n, m] = intersection;
    const patternX = (n + m) / 2 * k;
    const patternY = (m - n) / 2 * k;
    return patternAt(WHITE_NODE, patternX - 5, patternY - 9, x, y);
}

function blackNode(intersection, x, y) {
    const [n, m] = intersection;
    const patternX = (n + m) / 2 * k;
    const patternY = (m - n) / 2 * k;
    return patternAt(BLACK_NODE, patternX - 5, patternY - 9, x, y);
}

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

export function getPiece(x, y) {
    const [n, m] = nearestIntersection(x, y);
    if (n == -1 && m == -1) return kingChamber([-1, -1], x, y);
    if (n == 0 && m == 0) return whiteRootNode([0, 0], x, y);
    if (n < 0 || m < 0) return EM;

    const p = pow(2, n)
    if (m % (2 * p) == p) return blackNode([n, m], x, y);
    const p2 = pow(2, m)
    if (n % p2 == p2 / 2) return whiteNode([n, m], x, y);


    // if ((n + m) % 2 == 0) return WK;
    return EM;
}

export function getTreePiece(x, y) {
    if (y >= 7) return patternAt(TREE_ROOT_NODE, -4, 7, x, y);
    if (x + y == 4) return WP;
    if (x + y == 5) return BP;
    if (x - y == -8) return WP;
    if (x - y == -9) return BP;
    if (x == -4 && y == 0) return BP;
    if (x == -4 && y == 1) return BP;
    if (y >= 0) return EM;
    let n = -1;
    let depth = 0
    let shift = 0;
    while (y < -depth) {
        n++;
        depth += layerDepth(n);
        shift += layerShift(n);
    }

    return layer(n, x - shift, y + depth);
}

function layerShift(n) {
    if (n == 0) return 0;
    if (n == 1) return 3;
    const no_nodes = pow(2, n);
    return 12 * no_nodes / 4 - 10;
}

function layerDepth(n) {
    if (n == 0) return 15;
    if (n == 1) return 19;
    const no_nodes = pow(2, n)
    const bottom_width = 12 * no_nodes;
    return bottom_width - 10;
}
function mod(a, b) {
    return ((a % b) + b) % b;
}

function layer(n, x, y) {
    const depth = layerDepth(n);
    const no_nodes = pow(2, n);

    if (n == 0) {
        if (x + y == 10) return WP;
        if (x + y == 11) return BP;
        let result = patternAt(TREE_Z_COMP, -2, 0, x, y);
        if (result != EM) return result;
        result = patternAt(FIRST_FINAL_CONNECTION, 4, 0, x, y);
        return result;
    }
    if (x < 0) return EM;
    if (y >= depth) return EM;
    if (y < 0) return EM;
    const botX = x - 12 * no_nodes / 2 + 10;
    if (y < 14) {
        if (botX >= no_nodes * 12 - 6 && botX < no_nodes * 12 + 2 && y < 5) {
            return patternAt(FINAL_CONNECTION, 0, 0, botX - no_nodes * 12 + 6, y);
        }
        const X = Math.floor(botX / 12);
        if (X < 0 || X >= no_nodes) return EM;

        const znodeX = mod(x - 12 * no_nodes / 2 + 10, 12);
        if (znodeX < 6) {
            return patternAt(TREE_Z_COMP, 0, 0, znodeX, y);
        }

        if (X < no_nodes - 1 && znodeX >= 6 && y < 5) {
            return patternAt(CONNECTION, 0, 0, znodeX - 6, y);
        }

    }

    //if (x < (no_nodes / 2) * 12 && y > x + 13) {
    //if (x < (no_nodes / 2) * 12 && y > x + 19) {

    if (n == 1) {
        if (x == 1 || x == 2) return mod(x + y, 2) == 1 ? BP : WP;
        if (botX + y == 25) return BP;
        if (botX + y == 24) return WP;
        if (x >= 1) {
            if (botX + y == 13) return BP;
            if (botX + y == 12) return WP;
        }
        return patternAt(PAWN_CROSSING, 9, 9, x, y);
    }

    const lineX = mod(x, 12);

    let modifier = 0;
    if (lineX > 7 || lineX == 0)
        modifier = 6;

    if (x < (no_nodes / 2) * 12 && y > x + no_nodes * 12 / 2 - 11 + modifier) {
        if (lineX >= 6 && lineX < 8) return mod(x + y, 2) == 1 ? BP : WP;
        if (lineX >= 9 && lineX < 11) return mod(x + y, 2) == 1 ? BP : WP;
    } else if (x + y < 12 * no_nodes + 12 * no_nodes / 2 - 6 && x + y > 12 * no_nodes / 2 && y >= 4) {
        if (mod(botX + y, 12) == 1) return BP;
        if (mod(botX + y, 12) == 0) return WP;
        const crossingX = mod(botX - 7, 12);
        const crossingY = mod(y + 3, 12);
        if (botX > 0 && crossingX < 2 && crossingY < 6) {
            return patternAt(PAWN_CROSSING, 0, 0, crossingX, crossingY);
        }
    }
    return EM;
}

function treeRootNode(x, y) {
    return patternAt(TREE_ROOT_NODE, -2, 0, x, y);
}

export const TREE_ROOT_NODE = [
    [BP, EM, EM, EM, EM],
    [WP, EM, EM, BP, BP],
    [WP, WK, EM, BK, BP],
    [WP, WP, EM, EM, BP],
    [EM, EM, BP, EM, WP],
]

export const TREE_Z_COMP = [
    [BP, EM, EM, EM, EM, BP],
    [WP, BP, EM, EM, EM, BP],
    [EM, WP, BP, EM, EM, BP],
    [EM, EM, WP, BP, EM, WP],
    [EM, EM, EM, WP, BP, WP],
    [EM, EM, EM, BP, WP, BP],
    [EM, EM, BP, WP, EM, WP],
    [EM, BP, WP, EM, EM, EM],
    [EM, WP, EM, EM, EM, EM],
    [BP, EM, EM, EM, EM, EM],
    [EM, BP, EM, EM, EM, EM],
    [EM, WP, EM, EM, EM, EM],
    [EM, BP, EM, EM, EM, EM],
    [EM, WP, EM, EM, EM, EM],
]

export const PAWN_CROSSING = [
    [EM, BP],
    [EM, WP],
    [BP, WP],
    [WP, EM],
    [WP, EM],
    [WP, EM]
]

export const CONNECTION = [
    [EM, BP, WP, BP, EM],
    [BP, WP, EM, WP, BP],
    [WP, BP, EM, BP, WP],
    [BP, WP, EM, WP, BP],
    [WP, BP, EM, BP, WP],
];

export function getExamplePiece(x, y) {
    if (x == 0 && y == 0) return WN;
    if (x == 1 && y == 0) return WP;
    if (x == 2 && y == 0) return WK;
    if (x == 3 && y == 0) return WR;
    if (x == 4 && y == 0) return WB;
    if (x == 5 && y == 0) return WQ;
    return EM;
}

/**
 * Returns an array of [x, y] world-coordinate tiles that the piece at (px, py)
 * can move to. getPieceFn(x,y) returns the piece id at world tile (x,y).
 * Moves are generated infinitely along rays for sliding pieces.
 */
export function getLegalMoves(px, py, piece, getPieceFn) {
    const moves = [];
    const isWhite = piece >= WK && piece <= WP;

    function isEnemy(id) {
        if (id === EM) return false;
        return isWhite ? (id >= BK && id <= BP) : (id >= WK && id <= WP);
    }
    function isEmpty(id) { return id === EM; }
    function canLand(id) { return isEmpty(id) || isEnemy(id); }

    function ray(dx, dy) {
        let x = px + dx, y = py + dy;
        for (let i = 0; i < 200; i++) {
            const t = getPieceFn(x, y);
            if (!canLand(t)) break;
            moves.push([x, y]);
            if (isEnemy(t)) break; // capture, stop ray
            x += dx; y += dy;
        }
    }

    const p = piece > WP ? piece - 6 : piece; // normalize to white equivalent
    // WK=1 WQ=2 WR=3 WB=4 WN=5 WP=6

    if (p === WK) {
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++)
                if (dx || dy) {
                    const t = getPieceFn(px + dx, py + dy);
                    if (canLand(t)) moves.push([px + dx, py + dy]);
                }
    } else if (p === WQ) {
        for (let dx = -1; dx <= 1; dx++)
            for (let dy = -1; dy <= 1; dy++)
                if (dx || dy) ray(dx, dy);
    } else if (p === WR) {
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) ray(dx, dy);
    } else if (p === WB) {
        for (const [dx, dy] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) ray(dx, dy);
    } else if (p === WN) {
        for (const [dx, dy] of [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]) {
            const t = getPieceFn(px + dx, py + dy);
            if (canLand(t)) moves.push([px + dx, py + dy]);
        }
    } else if (p === WP) {
        const dir = isWhite ? 1 : -1;
        // forward
        if (isEmpty(getPieceFn(px, py + dir))) moves.push([px, py + dir]);
        // captures
        for (const dx of [-1, 1]) {
            const t = getPieceFn(px + dx, py + dir);
            if (isEnemy(t)) moves.push([px + dx, py + dir]);
        }
    }

    return moves;
}

export const FINAL_CONNECTION = [
    [EM, BP, WP, BP, EM, EM, EM, EM],
    [BP, WP, EM, WP, BP, EM, EM, EM],
    [WP, BP, EM, EM, WP, BP, EM, EM],
    [BP, WP, EM, EM, EM, WP, BP, EM],
    [WP, BP, EM, EM, BP, EM, WP, BP],
];

export const FIRST_FINAL_CONNECTION = [
    [EM, BP, WP, BP, EM, EM, EM, EM],
    [BP, WP, EM, WP, BP, EM, EM, EM],
    [WP, BP, EM, EM, WP, BP, EM, EM],
    [BP, WP, EM, EM, EM, WP, BP, EM],
    [WP, BP, EM, EM, EM, EM, WP, BP],
];