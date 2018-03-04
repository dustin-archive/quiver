
import { h } from 'hyperapp'

const ListingsGrid = ([ state, args ]) => {
  const { listings = [] } = state.Listings
  const result = []
  for (let i = 0; i < listings.length; i++) {
    result[i] = h('div', null, listings[i])
  }
  return result
}

const Listings = args =>
  h('div', { class: 'listings' }, [
    ListingsGrid(args)
  ])

export default Listings
