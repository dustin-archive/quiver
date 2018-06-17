
const decode = query => {
  query = query.slice(1).split('&')
  const result = {}
  for (let i = 0, pair; i < query.length; i++) {
    pair = query[i].split('=')
    result[pair[0]] = pair[1]
  }
  return result
}

const encode = query => {
  let result = '?'
  for (let key in query) {
    if (query[key] != null) {
      result += key + '=' + query[key] + '&'
    }
  }
  return result.slice(0, -1)
}

export { decode, encode }
