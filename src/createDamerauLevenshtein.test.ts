import createDamerauLevenshtein from './createDamerauLevenshtein.js'

describe('createDL', () => {
  it.each([
    ['abc', 'abc', 0],
    ['abc', 'acb', 1],
    ['abc', 'bac', 1],
    ['hello', 'hello', 0],
    ['hello', 'elloh', 2],
    ['abc', 'def', 3],
    ['hello', 'world', 4],
    ['kitten', 'sitting', 3],
  ])(
    'determines Damerau-Levenshtein distance (%p; %p; %p)',
    (a: string, b: string, distance: number) => {
      const dl = createDamerauLevenshtein()
      expect(dl(a, b)).toEqual(distance)
    },
  )
})
