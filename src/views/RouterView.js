
import Item from './Item'
import Listings from './Listings'
import NotFound from './NotFound'
import Reroute from './Reroute'
import Spinner from './Spinner'
import Welcome from './Welcome'

import shallowEqualArrays from '../helpers/shallowEqualArrays'

const RouterView = d => (state, actions) => {
  const id = state.Router.query.id

  // map paths to views
  const routes = {
    '': state.Listings[0] ? Listings : Spinner,
    '/item': state.Listings[id] ? Item : Spinner,
    '/reroute': Reroute,
    '/welcome': Welcome
  }

  // update RouterPage's paths if needed
  const oldPaths = state.RouterPage.paths
  const paths = Object.keys(routes)
  if (!oldPaths || !shallowEqualArrays(oldPaths, paths)) {
    actions.RouterPage.init({ paths })
  }

  // render route
  return routes[state.Router.path] || NotFound
}

export default RouterView
