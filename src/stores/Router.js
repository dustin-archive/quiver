
import { encode, decode } from '@whaaaley/query-string'

const Router = {
  init: d => {
    const hash = window.location.hash
    const index = hash.indexOf('?')
    const state = {
      query: decode(hash.slice(index)),
      path: hash.slice(1, index === -1 ? hash.length : index)
    }
    return state
  },
  route: data => state => {
    window.location.hash = (data.path || state.path) + encode(data.query || state.query)
  }
}

export { Router }
