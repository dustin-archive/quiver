
import { h } from 'hyperapp'

import Bar from './Bar'
import RouterView from './RouterView'

const App = d =>
  h('div', { class: 'app' }, [
    h('div', { class: 'app-main' }, [
      RouterView,
      Bar
    ]),
    h('div', { class: 'app-side' }, [
      h('div', {}, 'cart items'),
      h('div', {}, 'filters'),
      h('div', {}, 'personal lists')
    ])
  ])

export default App
