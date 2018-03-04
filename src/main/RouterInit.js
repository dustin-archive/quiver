
import Home from './Home'
import Listings from './Listings'
import NotFound from './NotFound'
import Reroute from './Reroute'

const RouterInit = main => {
  // init Router
  main.Router.init()

  // get app state
  const state = main.getState()

  // map paths to callbacks
  const routes = {
    '': Home,
    '/listings': Listings,
    '/reroute': Reroute
  }

  // call callback
  ;(routes[state.Router.path] || NotFound)([state, main])
}

export default RouterInit
