
import { readFileSync } from 'fs'
import { renderToString } from '@hyperapp/render/browser'
import { state } from './src/args'
import Stub from './src/views/Stub'

const view = s => Stub({
  css: readFileSync('./dist/app.css', 'utf-8'),
  js: readFileSync('./dist/app.js', 'utf-8')
})

process.stdout.write('<!DOCTYPE html>' + renderToString(view, state))
