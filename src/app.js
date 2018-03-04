
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

const Bar = args =>
  h('div', { class: 'bar' }, [
    h('div', { class: 'bar-inner' }, 'bar')
  ])

const view = (...args) =>
  h('div', { class: 'app' }, [
    h('div', { class: 'app-content' }, [
      h('div', { class: 'app-main' }, [
        h('div', { class: 'app-main-inner -left' }),
        h('div', { class: 'app-main-inner -right' }, [
          RouterView(args)
        ])
      ]),
      h('div', { class: 'app-side' }, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    ]),
    Bar(args)
  ])

// create app instance
const main = app(state, actions, view, document.getElementById('hyperapp'))

RouterInit(main)

window.addEventListener('hashchange', e => {
  RouterInit(main)
})
