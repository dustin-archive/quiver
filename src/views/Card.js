
import { h } from 'hyperapp'
import cc from 'classcat'

import Spinner from './Spinner'

const Card = ({ delay, url }) => (state, actions) => {
  const saved = state.Images[url]
  return h('a', {
    class: 'card',
    oncreate: e => {
      !saved && actions.Images.fetch({ url })
    },
    style: {
      backgroundImage: saved && 'url(' + saved.url + ')',
      animationDelay: delay + 's'
    }
  }, !(saved && saved.hide) && h('div', {
    class: cc([
      'card-spinner',
      { '-hide': saved }
    ])
  }, Spinner))
}

export default Card
