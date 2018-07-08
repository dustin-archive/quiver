
import { h } from 'hyperapp'

import Spinner from './Spinner'

const Show = data =>
  h('a', {
    class: 'card',
    style: {
      backgroundImage: 'url(' + data.blob + ')'
    }
  }, [
    data.hide && h('div', { class: 'card-overlay -hide' }, Spinner)
  ])

const Loaded = data =>
  h('a', {
    class: 'card',
    style: {
      backgroundImage: 'url(' + data.blob + ')'
    }
  }, [
    h('div', { class: 'card-overlay -hide' })
  ])

const Overlay = data =>
  h('a', { class: 'card' }, [
    h('div', { class: 'card-overlay' }, Spinner)
  ])

const Card = data => (state, actions) => {
  const blob = state.Images[data.url]
  const hide = state.Images[data.url + '.show'] === void 0
  const spin = state.Images[data.url + '.spin']

  const result = blob
    ? Show({ blob, hide, url: data.url })
    : spin
      ? Overlay({ url: data.url })
      : Loaded({ blob })

  return h('div', {
    oncreate: e => {
      setTimeout(() => {
        actions.Images.update({
          [data.url + '.spin']: true
        })
      }, 1000)
    }
  }, result)
}

export default Card
