import getTokens, { Token } from './getTokens.js'

/**
 * This function takes an ID as input and returns a formatted name.
 * The ID is split into tokens, each token is capitalized, and then
 * they are joined together with spaces.
 *
 * @param {string} id The ID to be transformed into a name.
 * @returns {string} The formatted name.
 */
function getDisplayNameFromID(id: string | Array<Token>): string {
  const tokens = Array.isArray(id) ? id : getTokens(id)
  return tokens
    .map(({ value }) => {
      return value[0].toUpperCase() + value.substring(1)
    })
    .join(' ')
}

export default getDisplayNameFromID
