
import { encode, decode } from '../helpers/queryString'

const Router = {
  init: d => {
    const hash = window.location.hash
    const index = hash.indexOf('?')
    return {
      path: hash.slice(1, index === -1 ? hash.length : index),
      query: decode(hash.slice(index))
    }
  },
  route: data => state => {
    const path = typeof data.path === 'string' ? data.path : state.path
    window.location.hash = data.query ? path + encode(data.query) : path
  }
}

export default Router
