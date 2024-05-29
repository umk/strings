import createDamerauLevenshtein from './createDamerauLevenshtein'

function createDamerauLevenshteinCompare(amax = 10, bmax = 10) {
  const dl = createDamerauLevenshtein(amax, bmax)
  return function (a: string, b: string, max: number): boolean {
    return Math.abs(a.length - b.length) <= max && dl(a, b) <= max
  }
}

export default createDamerauLevenshteinCompare
