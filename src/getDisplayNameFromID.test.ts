import getDisplayNameFromID from './getDisplayNameFromID'

describe('getDisplayNameFromID', () => {
  it.each([
    ['lorem', 'Lorem'],
    ['lorem1000', 'Lorem 1000'],
    ['lorem 1000', 'Lorem 1000'],
    ['loremIpsum', 'Lorem Ipsum'],
    ['loremIPSUM', 'Lorem Ipsum'],
    ['LOREMIpsum', 'Lorem Ipsum'],
    ['loremIpsumDolor', 'Lorem Ipsum Dolor'],
    ['loremIPSUMDolor', 'Lorem Ipsum Dolor'],
  ])('gets name from ID (%p; %p)', (id, expected) => {
    expect(getDisplayNameFromID(id)).toEqual(expected)
  })
})
