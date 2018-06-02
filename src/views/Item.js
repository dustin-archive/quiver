
import { h } from 'hyperapp'

import Card from './Card'

const Item = d => (state, actions) =>
  h('div', { class: 'item', key: 'item' }, [
    h('div', {
      class: 'item-image',
      oncreate: e => {
        if (state.Flip.rect) {
          const rect = e.getBoundingClientRect()

          const tx = state.Flip.rect.x - rect.x
          const ty = state.Flip.rect.y - rect.y
          const sx = state.Flip.rect.width / rect.width

          actions.Flip.update({
            transform: 'translate(' + tx + 'px,' + ty + 'px) scale(' + sx + ')',
            transition: null
          })

          setTimeout(() => {
            actions.Flip.update({
              transform: 'translate(0,0) scale(1)',
              transition: 'transform 1s'
            })
          }, 250)
        }
      },
      style: {
        transform: state.Flip.transform,
        transition: state.Flip.transition
      }
    }, Card({ url: state.Listings[state.Router.query.id].image }))
  ])

export default Item
