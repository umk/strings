export type Token = {
  kind: TokenKind
  value: string
}

export enum TokenKind {
  NUMBER = 'NUMBER',
  STRING = 'STRING',
}

function getTokens(id: string): Array<Token> {
  const result: Array<Token> = []
  const regexp = /((?<w>\p{L}+)|(?<n>\p{N}+))/gu
  for (;;) {
    const m = regexp.exec(id)
    if (!m) {
      break
    }
    const { groups } = m
    const { w, n } = groups || {}
    if (n) {
      result.push({ kind: TokenKind.NUMBER, value: n })
    } else {
      const uppercase = w.toUpperCase()
      let k = 0
      for (let j = 1; j < w.length; j++) {
        if (
          w[j] === uppercase[j] &&
          // The out of range is properly handled
          (w[j - 1] !== uppercase[j - 1] || w[j + 1] !== uppercase[j + 1])
        ) {
          result.push({
            kind: TokenKind.STRING,
            value: w.substring(k, j).toLowerCase(),
          })
          k = j
        }
      }
      result.push({
        kind: TokenKind.STRING,
        value: w.substring(k).toLowerCase(),
      })
    }
  }
  return result
}

export default getTokens
