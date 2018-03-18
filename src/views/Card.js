
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Card = ({ i, image, name }) =>
  h('div', {
    class: 'card',
    style: {
      'background-image': `url(images/products/${image})`,
      'animation-delay': (i * 0.25) + 's'
    }
  }, [
    h('div', { class: 'card-spinner' }, [
      Spinner()
    ])
  ])

export default Card
