const EM = 0;
const WK = 1;
const WQ = 2;
const WR = 3;
const WB = 4;
const WN = 5;
const WP = 6;
const BK = 7;
const BQ = 8;
const BR = 9;
const BB = 10;
const BN = 11;
const BP = 12;

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