
import { h } from 'hyperapp'

import Bar from './Bar'
import RouterView from './RouterView'

const App = args =>
  h('div', { class: 'app' }, [
    h('div', { class: 'app-content' }, [
      h('div', { class: 'app-main' }, [
        h('div', { class: 'app-inner' }, [
          RouterView(args),
          Bar(args)
        ])
      ]),
      h('div', { class: 'app-side' }, [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ])
    ])
  ])

export default App
