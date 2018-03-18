
import { h } from 'hyperapp'

const Card = ({ i, image, name }) =>
  h('div', {
    class: 'card',
    style: {
      'background-image': `url(images/products/${image})`
    }
  })

export default Card
