
import Listings from './Listings'
import NotFound from './NotFound'
import Reroute from './Reroute'
import Welcome from './Welcome'

import shallowEqualArrays from '../helpers/shallowEqualArrays'

const RouterView = args => {
  // map paths to views
  const routes = {
    '': Listings,
    '/reroute': Reroute,
    '/welcome': Welcome
  }

  // destructure arguments
  const [ state, actions ] = args

  // update RouterPage's paths if needed
  const oldPaths = state.RouterPage.paths
  const paths = Object.keys(routes)
  if (!oldPaths || !shallowEqualArrays(oldPaths, paths)) {
    actions.RouterPage.init({ paths })
  }

  // render route
  return (routes[state.Router.path] || NotFound)(args)
}

export default RouterView
