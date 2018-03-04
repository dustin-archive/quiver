
'use strict'

import { app } from 'hyperapp'

import RouterInit from './main/RouterInit'

import Listings from './stores/Listings'
import Reroute from './stores/Reroute'
import Router from './stores/Router'
import RouterPage from './stores/RouterPage'

import App from './views/App'

const state = {
  Listings: {},
  Reroute: {},
  Router: {},
  RouterPage: {}
}

const actions = {
  Listings,
  Reroute,
  Router,
  RouterPage,
  getState: d => state => state,
  update: data => data
}

const view = (...args) => App(args)

// create app instance
const main = app(state, actions, view, document.getElementById('app'))

RouterInit(main)

window.addEventListener('hashchange', e => {
  RouterInit(main)
})
