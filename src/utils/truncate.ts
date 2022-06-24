/**
 * If the length is passed in, return the string truncated to that length, otherwise return the string
 * truncated to 10 characters.
 * @param {string} str - string - The string to truncate.
 * @param {number} [length] - The length of the string to truncate to.
 * @returns A function that takes a string and an optional number and returns a string.
 */
const truncate = (str: string, length?: number) => {
  if (length) {
    return str.length > length ? `${str.substring(0, length)}...` : str
  }
  return str.length > 10 ? `${str.substring(0, 15)}...` : str
}

export default truncate
