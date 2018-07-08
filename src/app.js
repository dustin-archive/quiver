
'use strict'

import { app } from 'hyperapp'
import { state, actions } from './args'
import RouterInit from './main/RouterInit'
import App from './views/App'

// ...

const view = s => App
const container = document.getElementById('app')
const main = app(state, actions, view, container)

// ...

// google tag manager
window.dataLayer = window.dataLayer || []
window.dataLayer.push({
  'gtm.start': new Date().getTime(),
  event: 'gtm.js'
})

RouterInit(main)

window.addEventListener('hashchange', e => RouterInit(main))
