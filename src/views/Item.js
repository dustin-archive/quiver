
import { h } from 'hyperapp'
// import cc from 'classcat'

// const url = data => 'url(' + data + ')'

const Item = d => (state, actions) => {
  console.log(state.Router.query.id)
  return h('div', { class: 'item' }, [
    h('div', {
      class: 'item-image',
      oncreate: e => {
        !state.Stash.positionRect && setTimeout(() => {
          actions.Stash.update({
            positionRect: 'translate(0, 0)'
          })
        }, 1000)
      },
      style: {
        backgroundImage: state.Images['images/products/' + state.Router.query.id + '.jpg'], // temporary - there's better solutions
        transform: state.Stash.positionRect || `translate(${state.Stash.listingsRect.x - state.Stash.listingsRect.width}px, ${state.Stash.listingsRect.y}px)`
      }
    })
  ])
}

export default Item
