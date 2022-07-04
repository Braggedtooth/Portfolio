/**
 * Take an object, turn it into an array of key/value pairs, then turn that array into a string of
 * key/value pairs separated by ampersands.
 * @param {any} data - any - the data to encode
 * @returns An array of strings.
 * @link https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object/57580604
 */

const encodeJson = (data: any) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default encodeJson
