
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

window.dataLayer = window.dataLayer || []
window.gtag = () => window.dataLayer.push(arguments)
window.gtag('js', new Date())
window.gtag('config', 'GA_TRACKING_ID')

RouterInit(main)

window.addEventListener('hashchange', e => RouterInit(main))
