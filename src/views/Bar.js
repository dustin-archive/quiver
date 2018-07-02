
import { h } from 'hyperapp'

import Control from './Control'

const Bar = d =>
  h('div', { class: 'bar' }, [
    h('div', { class: 'bar-main' }, [
      h('a', { class: 'bar-logo', href: '#' }),
      Control
    ])
  ])

export default Bar
