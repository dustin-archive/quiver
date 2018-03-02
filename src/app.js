
'use strict'

import { h, app } from 'hyperapp'

import { Router } from './stores/Router'
import { RouterPage } from './stores/RouterPage'

import { RouterView } from './views/RouterView'

const state = {
  Router: {},
  RouterPage: {}
}

const actions = {
  Router,
  RouterPage
}

const view = (...args) =>
  h('div', { class: 'app' }, [
    h('div', { class: 'bar' }, [
      h('div', { class: 'bar-inner' }, 'so a guy walks into a bar... badumtsh, get it?')
    ]),
    RouterView(args),
    h('img', { src: 'images/hyperapp.png' })
  ])

app(state, actions, view, document.body)
