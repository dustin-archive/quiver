
import { h } from 'hyperapp'

const Item = d => (state, actions) => {
  const id = state.Router.query.id
  const url = 'images/products/' + state.Listings[id].image
  const saved = state.Images[url]

  return h('div', { class: 'item' }, [
    h('div', {
      class: 'item-image',
      oncreate: e => {
        !saved && actions.Images.fetch({ url })

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
        backgroundImage: saved && 'url(' + saved.url + ')',
        transform: state.Flip.transform,
        transition: state.Flip.transition
      }
    })
  ])
}

export default Item
