
import { h } from 'hyperapp'

import Card from './Card'
import Spinner from './Spinner'

const Items = d => (state, actions) => {
  const result = []

  for (let id in state.Listings.data) {
    result[result.length] = h('a', {
      class: 'listings-item',
      href: '#/item?id=' + id,
      onclick: e => {
        actions.Flip.update({
          active: true,
          rect: e.target.getBoundingClientRect()
        })
      },
      style: {
        animationDelay: result.length * 0.125 + 's'
      }
    }, Card({ url: state.Listings.data[id].image }))
  }

  return h('div', { class: 'listings' }, result)
}

const Listings = d => state =>
  state.Listings.loading
    ? Spinner
    : Items

export default Listings
