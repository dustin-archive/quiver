
import { h } from 'hyperapp'

const title = 'Quiver | Product lists, ratings, and reviews.'
const author = 'Dustin Dowell'
const description = 'Product lists, ratings, and reviews.'
const keywords = ''
const viewport = 'width=device-width, initial-scale=1, user-scalable=0'

const Stub = data =>
  h('html', { lang: 'en-US' }, [
    h('head', {}, [
      h('meta', { charset: 'utf-8' }),
      h('title', {}, title),
      h('meta', { name: 'author', content: author }),
      h('meta', { name: 'description', content: description }),
      h('meta', { name: 'keywords', content: keywords }),
      h('meta', { name: 'viewport', content: viewport }),
      h('link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }),
      ENV_PRODUCTION
        ? h('style', { innerHTML: data.css })
        // : h('link', { rel: 'stylesheet', href: 'app.css?ENV_DATE' })
        : h('link', { rel: 'stylesheet', href: 'app.css' })
    ]),
    h('body', null, [
      h('div', { id: 'app' }),
      h('script', {
        async: true,
        src: 'https://www.googletagmanager.com/gtm.js?id=' + 'GTM-WS2BPN3'
      }),
      ENV_PRODUCTION
        ? h('script', { innerHTML: data.js })
        // : h('script', { defer: true, src: 'app.js?ENV_DATE' })
        : h('script', { defer: true, src: 'app.js' })
    ])
  ])

export default Stub
