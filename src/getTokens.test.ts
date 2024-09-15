import getTokens, { TokenKind } from './getTokens.js'

describe('getTokens', () => {
  it.each([
    ['lorem', ['lorem']],
    ['lorem1000', ['lorem', '1000']],
    ['lorem 1000', ['lorem', '1000']],
    ['lorem  1000 ', ['lorem', '1000']],
    ['lorem_1000', ['lorem', '1000']],
    ['loremIpsum', ['lorem', 'ipsum']],
    ['loremIPSUM', ['lorem', 'ipsum']],
    ['LOREMIpsum', ['lorem', 'ipsum']],
    ['loremIpsumDolor', ['lorem', 'ipsum', 'dolor']],
    [' loremIpsumDolor', ['lorem', 'ipsum', 'dolor']],
    ['loremIPSUMDolor', ['lorem', 'ipsum', 'dolor']],
    ['lorem_ipsum_dolor', ['lorem', 'ipsum', 'dolor']],
  ])('gets tokens (%p; %p)', (token, expected) => {
    expect(getTokens(token)).toEqual(
      expected.map((v) => ({
        kind: /^\d+$/.test(v) ? TokenKind.NUMBER : TokenKind.STRING,
        value: v,
      })),
    )
  })
})
