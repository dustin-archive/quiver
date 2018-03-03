
'use strict'

import { h, app } from 'hyperapp'

import RouterInit from './main/RouterInit'

import Router from './stores/Router'
import RouterPage from './stores/RouterPage'

import RouterView from './views/RouterView'

const state = {
  Router: {},
  RouterPage: {}
}

const actions = {
  Router,
  RouterPage,
  getState: d => state => state,
  update: data => data
}

const view = (...args) =>
  h('div', { class: 'app' }, [
    h('div', { class: 'bar' }, [
      h('div', { class: 'bar-inner' }, 'so a guy walks into a bar... badumtsh, get it?')
    ]),
    RouterView(args),
    h('img', { src: 'images/hyperapp.png' })
  ])

// create app instance
const main = app(state, actions, view, document.getElementById('hyperapp'))

RouterInit(main)

window.addEventListener('hashchange', e => {
  RouterInit(main)
})
