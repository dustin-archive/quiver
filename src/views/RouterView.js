
import Item from './Item'
import Listings from './Listings'
import NotFound from './NotFound'
import Reroute from './Reroute'
import Store from './Store'
import Welcome from './Welcome'

// import shallowEqualArrays from '../helpers/shallowEqualArrays'

const RouterView = d => (state, actions) => {
  // map paths to views
  const routes = {
    '': Listings,
    '/item': Item,
    '/reroute': Reroute,
    '/store': Store,
    '/welcome': Welcome
  }

  // update RouterPage's paths if needed
  // const oldPaths = state.RouterPage.paths
  // const paths = Object.keys(routes)
  // if (!oldPaths || !shallowEqualArrays(oldPaths, paths)) {
  //   actions.RouterPage.init({ paths })
  // }

  // render route
  return routes[state.Router.path] || NotFound
}

export default RouterView
