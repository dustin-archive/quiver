
import Item from './Item'
import Listings from './Listings'
import NotFound from './NotFound'
import Reroute from './Reroute'
import Welcome from './Welcome'

import { encode } from '../helpers/queryString'
import gtag from '../helpers/gtag'

const RouterInit = main => {
  // init Router
  main.Router.init()

  // get app state
  const state = main.getState()

  // map paths to callbacks
  const routes = {
    '': Listings,
    '/item': Item,
    '/reroute': Reroute,
    '/store': Listings, // change? maybe listings could accept an arg ID? not sure
    '/welcome': Welcome
  }

  const path = state.Router.path === '' ? '/' : state.Router.path

  // google analytics
  gtag('config', 'GA_TRACKING_ID', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path + encode(state.Router.query)
  })

  // call callback
  ;(routes[state.Router.path] || NotFound)(state, main)
}

export default RouterInit
