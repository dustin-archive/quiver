
import { h } from 'hyperapp'

import Card from './Card'

const Listings = d => (state, actions) => {
  const result = []

  for (let id in state.Listings) {
    result[result.length] = h('a', {
      class: 'listings-item',
      href: '#/item?id=' + id,
      onclick: e => {
        actions.Flip.update({
          rect: e.target.getBoundingClientRect()
        })
      },
      style: {
        animationDelay: result.length * 0.125 + 's'
      }
    }, Card({ url: state.Listings[id].image }))
  }

  return h('div', { class: 'listings' }, result)
}

export default Listings
