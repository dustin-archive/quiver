
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Image = data =>
  h('a', {
    class: 'card',
    style: {
      backgroundImage: 'url(' + data.image.url + ')'
    }
  }, [
    !data.image.show && h('div', { class: 'card-overlay -hide' }, Spinner)
  ])

const Overlay = d =>
  h('a', { class: 'card' }, [
    h('div', { class: 'card-overlay' }, Spinner)
  ])

const Card = data => (state, actions) => {
  const image = state.Images[data.url]
  return image
    ? Image({ image })
    : Overlay
}

export default Card
