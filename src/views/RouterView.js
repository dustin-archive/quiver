
import Home from './Home'
import Listings from './Listings'
import NotFound from './NotFound'

import shallowEqualArrays from '../helpers/shallowEqualArrays'

const RouterView = args => {
  // map paths to views
  const routes = {
    '': Home,
    '/listings': Listings
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
