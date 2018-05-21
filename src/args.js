
import Images from './stores/Images'
import Listings from './stores/Listings'
import Reroute from './stores/Reroute'
import Router from './stores/Router'
import RouterPage from './stores/RouterPage'

const state = {
  Images: {},
  Listings: {},
  Reroute: {},
  Router: {},
  RouterPage: {}
}

const actions = {
  Images,
  Listings,
  Reroute,
  Router,
  RouterPage,
  getState: d => state => state,
  update: data => data
}

export { state, actions }
