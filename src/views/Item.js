
import { h } from 'hyperapp'

import Card from './Card'
import Spinner from './Spinner'

const Image = d => (state, actions) =>
  h('div', { class: 'item' }, [
    h('div', { class: 'item-image -fade' }, [
      Card({
        url: state.Listings.data[state.Router.query.id].imag
      })
    ])
  ])

const Flip = d => (state, actions) =>
  h('div', { class: 'item' }, [
    h('div', {
      class: 'item-image',
      oncreate: e => {
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
      },
      style: {
        transform: state.Flip.transform,
        transition: state.Flip.transition
      }
    }, [
      Card({
        url: state.Listings.data[state.Router.query.id].image
      })
    ])
  ])

const Item = d => state =>
  state.Flip.active
    ? Flip
    : state.Listings.loading
      ? Spinner
      : Image

export default Item
