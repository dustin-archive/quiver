
const shallowEqualArrays = (a, b) => {
  if (a === b) {
    return true
  }
  const length = a.length
  if (length !== b.length) {
    return false
  }
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

export default shallowEqualArrays
