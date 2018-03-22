
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Card = ([ state, actions ], { i, image, name }) => {
  const savedImage = state.Images[image]
  return h('a', {
    class: 'card',
    onclick () {
      console.log('click', i)
    },
    oncreate () {
      window.fetch(`images/products/${image}`)
        .then(res => res.blob())
        .then(blob => {
          actions.Images.update({
            [image]: window.URL.createObjectURL(blob)
          })
        })
    },
    style: {
      'background-image': savedImage ? `url(${savedImage})` : '',
      'animation-delay': (i * 0.25) + 's'
    }
  }, !savedImage && h('div', {
    class: 'card-spinner',
    onremove (el, done) {
      el.classList.add('-hide')
      setTimeout(done, 1000)
    }
  }, Spinner()))
}

export default Card
