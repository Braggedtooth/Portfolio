const truncate = (str: string, length?: number) => {
  if (length) {
    return str.length > length ? `${str.substring(0, length)}...` : str
  }
  return str.length > 10 ? `${str.substring(0, 15)}...` : str
}

export default truncate
