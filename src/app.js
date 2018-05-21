
'use strict'

import { app } from 'hyperapp'
import { state, actions } from './args'

import RouterInit from './main/RouterInit'

// import Images from './stores/Images'
// import Listings from './stores/Listings'
// import Reroute from './stores/Reroute'
// import Router from './stores/Router'
// import RouterPage from './stores/RouterPage'

import App from './views/App'

// const state = {
//   Images: {},
//   Listings: {},
//   Reroute: {},
//   Router: {},
//   RouterPage: {}
// }

// const actions = {
//   Images,
//   Listings,
//   Reroute,
//   Router,
//   RouterPage,
//   getState: d => state => state,
//   update: data => data
// }

const view = s => App

// create app instance
const main = app(state, actions, view, document.getElementById('app'))

RouterInit(main)

window.addEventListener('hashchange', e => {
  RouterInit(main)
})
