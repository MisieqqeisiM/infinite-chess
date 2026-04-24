export async function loadShader(path) {
    const url = new URL(path, import.meta.url)
    const res = await fetch(url)
    return await res.text()
}