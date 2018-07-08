
'use strict'

import { app } from 'hyperapp'
import { state, actions } from './args'

// ...

import gtag from './helpers/gtag'

// ...

import App from './views/App'
import RouterInit from './main/RouterInit'

// ...

const view = s => App
const container = document.getElementById('app')
const main = app(state, actions, view, container)

// ...

window.dataLayer = window.dataLayer || []

gtag('js', new Date())
gtag('config', 'GA_TRACKING_ID')

RouterInit(main)

window.addEventListener('hashchange', e => RouterInit(main))
