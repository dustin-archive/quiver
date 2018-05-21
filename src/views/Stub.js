
import { h } from 'hyperapp'
import Spinner from './Spinner'

const Stub = data =>
  h('html', { lang: 'en-US' }, [
    h('head', null, [
      h('meta', { charset: 'utf-8' }),
      h('title', null, 'Quiver | Product lists, ratings, and reviews.'),
      h('meta', {
        name: 'author',
        content: 'Dustin Dowell'
      }),
      h('meta', {
        name: 'description',
        content: 'Product lists, ratings, and reviews.'
      }),
      h('meta', {
        name: 'keywords',
        content: ''
      }),
      h('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0'
      }),
      h('link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }),
      ENV_PRODUCTION
        ? h('style', { innerHTML: data.css })
        : h('link', { rel: 'stylesheet', href: 'app.css' })
    ]),
    h('body', null, [
      h('div', { id: 'app' }, [
        h('div', { class: 'content' }, Spinner)
      ]),
      ENV_PRODUCTION
        ? h('script', { innerHTML: data.js })
        : h('script', { defer: true, src: 'app.js' })
    ])
  ])

export default Stub
