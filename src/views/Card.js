
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Card = data => (state, actions) => {
  const saved = state.Images[data.url]

  return saved
    ? h('a', {
      class: 'card',
      style: {
        backgroundImage: 'url(' + saved.url + ')'
      }
    }, saved.hide && h('div', { class: 'card-overlay -hide' }, Spinner))
    : h('a', {
      class: 'card',
      oncreate: e => {
        actions.Images.fetch({ url: data.url })
      }
    }, h('div', { class: 'card-overlay' }, Spinner))
}

export default Card
