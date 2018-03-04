
import Home from './Home'
import Listings from './Listings'
import NotFound from './NotFound'

const RouterInit = main => {
  // init Router
  main.Router.init()

  // get app state
  const state = main.getState()

  // map paths to callbacks
  const routes = {
    '': Home,
    '/listings': Listings
  }

  // call callback
  ;(routes[state.Router.path] || NotFound)(main)
}

export default RouterInit
