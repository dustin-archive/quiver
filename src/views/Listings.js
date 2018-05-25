
import { h } from 'hyperapp'
import cc from 'classcat'

import Card from './Card'

const Listings = d => (state, actions) => {
  const { listings = [] } = state.Listings
  const result = []
  for (let i = 0; i < listings.length; i++) {
    const item = listings[i]
    result[i] = h('a', {
      class: cc([
        'listings-item',
        { '-wide': item.wide }
      ]),
      href: '#/item?id=' + item.id,
      onclick: e => {
        actions.Stash.update({
          listingsRect: e.target.getBoundingClientRect()
        })
      }
    }, [
      Card({
        delay: i * 0.25,
        url: 'images/products/' + item.image
      })
    ])
  }
  return h('div', { class: 'listings' }, result)
}

export default Listings
