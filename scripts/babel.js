
const fs = require('fs')
const babel = require('@babel/core')

const result = babel.transformFileSync('dist/app.js', {
  inputSourceMap: JSON.parse(fs.readFileSync('dist/app.js.map', 'utf8')),
  plugins: [
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-transform-arrow-functions'),
    require('@babel/plugin-transform-block-scoped-functions'),
    require('@babel/plugin-transform-block-scoping'),
    require('@babel/plugin-transform-computed-properties'),
    require('@babel/plugin-transform-destructuring'),
    require('@babel/plugin-transform-function-name'),
    require('@babel/plugin-transform-parameters'),
    require('@babel/plugin-transform-shorthand-properties'),
    require('@babel/plugin-transform-spread'),
    require('@babel/plugin-transform-template-literals')
  ]
})

fs.writeFileSync('dist/app.js.map', JSON.stringify(result.map))
process.stdout.write(result.code)
