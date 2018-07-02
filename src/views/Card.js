
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Image = data =>
  h('a', {
    class: 'card',
    style: {
      backgroundImage: 'url(' + data.blob + ')'
    }
  }, [
    h('div', { class: 'card-overlay -hide' }, Spinner)
  ])

const Overlay = d =>
  h('a', { class: 'card' }, [
    h('div', { class: 'card-overlay' }, Spinner)
  ])

const Card = data => (state, actions) => {
  const blob = state.Images[data.url]
  return blob
    ? Image({ blob })
    : Overlay
}

export default Card
