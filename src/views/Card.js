
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Image = data => state =>
  h('a', {
    class: 'card',
    style: {
      backgroundImage: 'url(' + data.image.url + ')'
    }
  }, [
    state.Cards.spin
      ? h('div', { class: 'card-overlay -hide' }, Spinner)
      : h('div', { class: 'card-overlay -fade' })
  ])

const Overlay = d => state =>
  h('a', { class: 'card' }, [
    state.Cards.spin
      ? h('div', { class: 'card-overlay' }, Spinner)
      : h('div', { class: 'card-overlay -hide' })
  ])

const Card = data => (state, actions) => {
  const image = state.Images[data.url]

  return image && image.url
    ? Image({ image })
    : Overlay
}

export default Card
