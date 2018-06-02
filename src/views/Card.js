
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Card = ({ delay, url }) => (state, actions) => {
  const saved = state.Images[url]

  return saved
    ? h('a', {
      class: 'card',
      style: {
        backgroundImage: 'url(' + saved.url + ')'
        // animationDelay: delay + 's'
      }
    }, saved.hide && h('div', { class: 'card-overlay -hide' }, Spinner))
    : h('a', {
      class: 'card',
      oncreate: e => {
        actions.Images.fetch({ url })
      }
    }, h('div', { class: 'card-overlay' }, Spinner))
}

export default Card
