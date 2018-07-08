
import { encode } from '../helpers/queryString'
import gtag from '../helpers/gtag'

import Item from './Item'
import Listings from './Listings'
import NotFound from './NotFound'
import Reroute from './Reroute'
import Welcome from './Welcome'

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
    '/welcome': Welcome
  }

  const path = state.Router.path === '' ? '/' : state.Router.path

  //
  gtag('config', 'GA_TRACKING_ID', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path + encode(state.Router.query)
  })

  // call callback
  ;(routes[state.Router.path] || NotFound)(state, main)
}

export default RouterInit
