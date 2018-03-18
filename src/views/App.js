
import { h } from 'hyperapp'

import Bar from './Bar'
import RouterView from './RouterView'

const App = args =>
  h('div', { class: 'app' }, [
    h('div', { class: 'app-main' }, [
      RouterView(args),
      Bar(args)
    ]),
    h('div', { class: 'app-side' }, [
      h('div', null, 'cart items'),
      h('div', null, 'filters'),
      h('div', null, 'personal lists')
    ])
  ])

export default App
