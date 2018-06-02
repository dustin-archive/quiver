
import { update } from '../actions'

const fetch = data => (state, actions) => {
  window.fetch(data.url)
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob)
      actions.update({
        [data.url]: { hide: true, url }
      })
      setTimeout(d => {
        actions.update({
          [data.url]: { hide: false, url }
        })
      }, 1000)
    })
}

const Images = {
  fetch,
  update
}

export default Images
