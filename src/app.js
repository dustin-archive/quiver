
'use strict'

import { app as hyperapp } from 'hyperapp'

import RouterInit from './main/RouterInit'

import Router from './stores/Router'
import RouterPage from './stores/RouterPage'

import App from './views/App'

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

const view = (...args) => App(args)

// create app instance
const main = hyperapp(state, actions, view, document.getElementById('hyperapp'))

RouterInit(main)

window.addEventListener('hashchange', e => {
  RouterInit(main)
})
