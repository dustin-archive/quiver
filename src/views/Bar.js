
import { h } from 'hyperapp'

import Control from './Control'

const Bar = args =>
  h('div', { class: 'bar' }, [
    h('div', { class: 'bar-inner' }, [
      h('a', { href: '/' }),
      Control(args)
    ])
  ])

export default Bar
