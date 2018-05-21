
import { h } from 'hyperapp'
import cc from 'classcat'

import Card from './Card'

const Listings = d => state => {
  const { listings = [] } = state.Listings
  const result = []
  for (let i = 0; i < listings.length; i++) {
    const { image, name, wide } = listings[i]
    result[i] = h('div', {
      class: cc([
        'listings-item',
        {
          '-wide': wide
        }
      ])
    }, [
      h(Card, { i, image, name })
    ])
  }
  return h('div', { class: 'listings' }, result)
}

export default Listings
