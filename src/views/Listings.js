
import { h } from 'hyperapp'
import cc from 'classcat'

import Card from './Card'

const Listings = d => (state, actions) => {
  const { listings = [] } = state.Listings
  const result = []
  // for (let i = 0; i < listings.length; i++) {
  for (let key in listings) {
    const item = listings[key]
    result[result.length] = h('a', {
      class: cc([
        'listings-item',
        { '-wide': item.wide }
      ]),
      href: '#/item?id=' + key,
      onclick: e => {
        actions.Flip.update({
          image: item.image,
          rect: e.target.getBoundingClientRect()
        })
      }
    }, [
      Card({
        delay: result.length * 0.125,
        url: 'images/products/' + item.image
      })
    ])
  }
  return h('div', { class: 'listings' }, result)
}

export default Listings
