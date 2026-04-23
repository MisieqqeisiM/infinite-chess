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
    return patternAt(WHITE_NODE, patternX - 5, patternY - 13, x, y);
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
    // if (y >= 0) return treeRootNode(x, y);
    return layer(2, x, y);
}

function layerDepth(n) {
    if (n == 0) return 14 + 4;
    const no_nodes = pow(2, n)
    const bottom_width = 12 * no_nodes;
    return bottom_width - 12;
}
function mod(a, b) {
    return ((a % b) + b) % b;
}

function layer(n, x, y) {
    const depth = layerDepth(n);
    const no_nodes = pow(2, n);
    if (x < 0) return EM;
    if (y >= depth) return EM;
    if (y < 0) return EM;
    const botX = x - 12 * no_nodes / 2 + 10;
    if (y < 14) {
        const X = Math.floor(botX / 12);
        if (X < 0 || X >= no_nodes) return EM;

        const znodeX = mod(x - 12 * no_nodes / 2 + 10, 12);
        if (znodeX < 6) {
            return patternAt(TREE_Z_COMP, 0, 0, znodeX, y);
        }
    }

    //if (x < (no_nodes / 2) * 12 && y > x + 13) {
    //if (x < (no_nodes / 2) * 12 && y > x + 19) {
    if (x < (no_nodes / 2) * 12 && y > x + 13) {
        const lineX = mod(x, 12);
        if (lineX >= 6 && lineX < 8) return mod(x + y, 2) == 1 ? BP : WP;
        if (lineX >= 9 && lineX < 11) return mod(x + y, 2) == 1 ? BP : WP;
    } else if (x + y < 70 && x + y > 15 && y >= 4) {
        if (mod(botX + y, 12) == 1) return BP;
        if (mod(botX + y, 12) == 0) return WP;
        const crossingX = mod(botX - 7, 12);
        const crossingY = mod(y + 3, 12);
        if (crossingX < 2 && crossingY < 6) {
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