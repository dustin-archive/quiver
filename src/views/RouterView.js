
import { h } from 'hyperapp'

import Home from './Home'

import { shallowEqualArrays } from '../helpers/shallowEqualArrays'

const NotFound = () => h('div', null, '404')

const RouterView = args => {
  // pair paths with views
  const routes = {
    '': Home
  }

  // destructure arguments
  const [state, actions] = args

  // update RouterPage's paths if needed
  const oldPaths = state.RouterPage.paths
  const paths = Object.keys(routes)
  if (!oldPaths || !shallowEqualArrays(oldPaths, paths)) {
    // NOTE: update state without re-rendering
    actions.RouterPage.init({ paths })
  }

  // destructure current route props
  const { mounted, view = NotFound } = routes[state.Router.path || '']

  // call the route's mounted callback
  mounted && mounted()

  // render the route's view
  return view
}

export { RouterView }
