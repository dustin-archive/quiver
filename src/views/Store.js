
import { h } from 'hyperapp'

// import Spinner from './Spinner'
import Listings from './Listings'

const Store = d => state =>
  h('div', {}, [
    h('div', {}, 'This is a store page'),
    h('div', {}, 'Lots of cool stuff will go here'),
    h('div', {}, 'Like a banner'),
    h('div', {}, 'Product menus'),
    h('div', {}, 'Maybe a search bar'),
    Listings
  ])

export default Store
