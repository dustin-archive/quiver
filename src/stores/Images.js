
import { update } from '../actions'

const enqueue = data => (state, actions) => {
  // enqueue the image
  state.queue[state.queue.length] = data.url

  actions.update({
    started: true,
    queue: state.queue
  })

  console.log(
    'index', data.index,
    'index', state.queue.indexOf(data.url),
    'url', data.url
  )

  // fetch the image
  if (!state.started) {
    actions.fetch({
      url: state.queue[0]
    })
  }
}

const fetch = data => (state, actions) => {
  window.fetch(data.url)
    .then(res => res.blob())
    .then(blob => {
      if (state.index < state.queue.length) {
        actions.fetch({
          url: state.queue[state.index + 1]
        })
      }

      const url = window.URL.createObjectURL(blob)
      actions.update({
        index: state.index + 1,
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
  enqueue,
  fetch,
  update
}

export default Images
