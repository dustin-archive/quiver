
import { update } from '../actions'

const fetch = data => (state, actions) => {
  const { index = 0 } = state
  const image = data.images[index]
  const condition = index < data.images.length

  condition && window.fetch('S3_URL' + image)
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob)

      actions.update({
        index: index + 1,
        [image]: {
          url
        }
      })

      actions.fetch({
        images: data.images
      })

      setTimeout(() => {
        actions.update({
          [image]: {
            show: true,
            url
          }
        })
      }, 1000)
    })
}

const Images = {
  fetch,
  update
}

export default Images
