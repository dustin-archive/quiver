
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

  // google tag manager
  window.dataLayer.push({
    event: 'pageview',
    path: state.Router.path
  })

  // call callback
  ;(routes[state.Router.path] || NotFound)(state, main)
}

export default RouterInit
