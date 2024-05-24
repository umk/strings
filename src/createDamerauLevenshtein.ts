function createDistanceMatrix(a: number, b: number) {
  const d = new Array<number>(a).fill(0).map(() => new Array<number>(b).fill(0))
  for (let i = 0; i < a; i++) {
    d[i][0] = i
  }
  for (let j = 0; j < b; j++) {
    d[0][j] = j
  }
  return d
}

function createDamerauLevenshtein(amax = 10, bmax = 10) {
  const _d = createDistanceMatrix(amax, bmax)
  return (a: string, b: string): number => {
    const d =
      a.length < amax && b.length < bmax ? _d : createDistanceMatrix(a.length + 1, b.length + 1)
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1
        d[i][j] = Math.min(
          d[i - 1][j] + 1, // deletion
          d[i][j - 1] + 1, // insertion
          d[i - 1][j - 1] + cost, // substitution
        )
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          d[i][j] = Math.min(
            d[i][j],
            d[i - 2][j - 2] + 1, // transposition
          )
        }
      }
    }
    return d[a.length][b.length]
  }
}

export default createDamerauLevenshtein
