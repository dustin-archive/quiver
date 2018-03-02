
import { h } from 'hyperapp'

const mounted = () => {
  console.log('this is the home page')
}

const view = h('div', null, 'home')

export default { mounted, view }
