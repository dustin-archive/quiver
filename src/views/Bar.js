
import { h } from 'hyperapp'

import Control from './Control'

const Bar = args =>
  h('div', { class: 'bar' }, [
    h('div', { class: 'bar-main' }, [
      h('a', { class: 'bar-logo', href: '/' }),
      Control(args)
    ])
  ])

export default Bar
