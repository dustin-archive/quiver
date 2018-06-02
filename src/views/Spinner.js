
import { h } from 'hyperapp'

const Spinner = d =>
  h('div', { class: 'spinner' }, [
    h('div', { class: 'spinner-circle' })
  ])

export default Spinner
