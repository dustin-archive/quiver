
import Images from './stores/Images'
import Listings from './stores/Listings'
import Reroute from './stores/Reroute'
import Router from './stores/Router'
import RouterPage from './stores/RouterPage'

import { getState, update } from './actions'

const state = {
  Images: {},
  Listings: {},
  Reroute: {},
  Router: {},
  RouterPage: {},
  Flip: {},
  Cards: {}
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
  Cards: {
    update
  },

  // utility actions
  getState,
  update
}

export { state, actions }
