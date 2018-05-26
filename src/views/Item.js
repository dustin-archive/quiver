
import { h } from 'hyperapp'

const translate = (x, y) => 'translate(' + x + 'px,' + y + 'px)'

const Item = d => (state, actions) => {
  const url = 'images/products/' + state.Flip.image
  const saved = state.Images[url]
  return h('div', { class: 'item' }, [
    h('div', {
      class: 'item-image',
      oncreate: e => {
        !saved && actions.Images.fetch({ url })

        const item = state.Flip.rect

        if (item) {
          const rect = e.getBoundingClientRect()

          actions.Flip.update({
            translate: translate(item.left - rect.left, item.top - rect.top)
          })

          setTimeout(() => {
            actions.Flip.update({
              translate: translate(0, 0),
              transition: true
            })
          }, 250)
        }
      },
      style: {
        backgroundImage: saved && 'url(' + saved.url + ')',
        transform: state.Flip.translate,
        transition: state.Flip.transition && 'transform 1s'
      }
    })
  ])
}

export default Item
