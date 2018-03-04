
import { h } from 'hyperapp'

const NotFound = ([ state ]) =>
  h('div', null, `No views for this route. #${state.Router.path}`)

export default NotFound
