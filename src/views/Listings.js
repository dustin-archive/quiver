
import { h } from 'hyperapp'
import cc from 'classcat'

import Card from './Card'

const Grid = ([ state, args ]) => {
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
      Card({ i, image, name })
    ])
  }
  return result
}

const Listings = args =>
  h('div', { class: 'listings' }, [
    Grid(args)
  ])

export default Listings
