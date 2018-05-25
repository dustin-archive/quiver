
import Images from './stores/Images'
import Listings from './stores/Listings'
import Reroute from './stores/Reroute'
import Router from './stores/Router'
import RouterPage from './stores/RouterPage'

// common actions
import { getState, update } from './actions'

const state = {
  Images: {
    hide: {}
  },
  Listings: {},
  Reroute: {},
  Router: {},
  RouterPage: {},
  Stash: {
    itemRect: {
      x: 0,
      y: 0
    },
    listingsRect: {
      x: 0,
      y: 0
    }
  } // temporary - remove this
}

const actions = {
  Images,
  Listings,
  Reroute,
  Router,
  RouterPage,
  Stash: { // temporary - remove this
    update
  },

  // common actions
  getState,
  update
}

export { state, actions }
