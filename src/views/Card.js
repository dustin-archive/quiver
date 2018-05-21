
import { h } from 'hyperapp'
import cc from 'classcat'

import Spinner from './Spinner'

const Card = ({ i, image, name }) => (state, actions) => {
  const url = 'images/products/' + image
  const saved = state.Images[url]
  return h('a', {
    class: 'card',
    oncreate: () => {
      actions.Images.fetch({ url })
    },
    style: {
      'background-image': saved && `url(${saved.url})`,
      'animation-delay': (i * 0.25) + 's'
    }
  }, !(saved && saved.hide) && h('div', {
    class: cc([
      'card-spinner',
      { '-hide': saved }
    ])
  }, Spinner))
}

export default Card
