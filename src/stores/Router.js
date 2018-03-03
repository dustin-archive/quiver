
import { encode, decode } from '@whaaaley/query-string'

const Router = {
  init: data => {
    const hash = window.location.hash
    const index = hash.indexOf('?')
    const path = hash.slice(1, index === -1 ? hash.length : index)
    data && data[path] && data[path]()
    return { query: decode(hash.slice(index)), path }
  },
  route: data => state => {
    window.location.hash = (data.path || state.path) + encode(data.query || state.query)
  }
}

export default Router
