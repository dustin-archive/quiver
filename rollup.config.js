
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

const { NODE_ENV } = process.env

export default {
  plugins: [
    replace({ NODE_ENV }),
    resolve()
  ]
}
