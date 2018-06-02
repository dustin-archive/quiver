
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Card = data => (state, actions) => {
  const url = 'images/products/' + data.url
  const saved = state.Images[url]

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
        actions.Images.fetch({ url })
      }
    }, h('div', { class: 'card-overlay' }, Spinner))
}

export default Card
