
import { h } from 'hyperapp'

const Bar = args =>
  h('div', { class: 'bar' }, [
    h('a', { href: '/' })
  ])

export default Bar
