
import Images from './stores/Images'
import Listings from './stores/Listings'
import Reroute from './stores/Reroute'
import Router from './stores/Router'
import RouterPage from './stores/RouterPage'

// common actions
import { getState, update } from './actions'

const state = {
  Images: {
    // TODO: remove all this junk
    hide: {},
    queue: [],
    index: 0
  },
  Listings: {},
  Reroute: {},
  Router: {},
  RouterPage: {},
  Flip: {}
}

const actions = {
  Images,
  Listings,
  Reroute,
  Router,
  RouterPage,
  Flip: {
    update
  },

  // common actions
  getState,
  update
}

export { state, actions }
