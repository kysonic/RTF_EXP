/**
 * Promisify ThreeJS loaders
 * @param fn - Function to promisify
 * @returns {Promise<any>}
 */
export function promisifyLoader(fn)  {
    return function asnycLoader(url, onProgress = null) {
        return new Promise((resolve, reject) => fn && fn.load && fn.load(url, resolve, onProgress, reject));
    }
}
