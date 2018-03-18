
import { h } from 'hyperapp'

const Spinner = d =>
  h('div', { class: 'spinner' }, [
    h('img', { src: 'images/spinner.png' })
  ])

export default Spinner
