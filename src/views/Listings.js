
import { h } from 'hyperapp'
import cc from 'classcat'

import Card from './Card'

const Listings = d => (state, actions) => {
  const data = state.Listings.data
  const result = []
  for (let key in data) {
    const item = data[key]
    result[result.length] = h('a', {
      class: cc([
        'listings-item',
        { '-wide': item.wide }
      ]),
      href: '#/item?id=' + key,
      onclick: e => {
        actions.Flip.update({
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
