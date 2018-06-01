
import { h } from 'hyperapp'

const Item = d => (state, actions) => {
  // const url = 'images/products/' + state.Flip.image
  const url = 'images/products/' + state.Router.query.id + '.jpg' // FIXME: temp fix for demo
  const saved = state.Images[url]

  // const listings = state.Listings.listings
  // let url
  // let saved
  //
  // if (listings) {
  //   url = 'images/products/' + listings[state.Router.query.id].image
  //   saved = state.Images[url]
  // }

  return h('div', { class: 'item' }, [
    h('div', {
      class: 'item-image',
      oncreate: e => {
        !saved && actions.Images.fetch({ url })

        const item = state.Flip.rect

        if (item) {
          const rect = e.getBoundingClientRect()

          actions.Flip.update({
            transform: 'translate(' + (item.x - rect.x) + 'px, ' + (item.y - rect.y) + 'px) scale(' + (item.width / rect.width) + ')',
            transition: false
          })

          setTimeout(() => {
            actions.Flip.update({
              transform: 'scale(1) translate(0,0)',
              transition: true
            })
          }, 250)
        }
      },
      style: {
        backgroundImage: saved && 'url(' + saved.url + ')',
        transform: state.Flip.transform,
        transition: state.Flip.transition && 'transform 1s'
      }
    })
  ])
}

export default Item
