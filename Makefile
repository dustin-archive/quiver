
PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

.SILENT:

all: prep css js minify html
	gzip -k -n -9 dist/app.css dist/app.js

demo: production all
	dev-server dist --watch 'src/**/*' 'make'

start: development prep css js html
	dev-server dist --watch 'src/**/*.scss' 'make css' --watch 'src/**/*.js' 'make js'

development:
	cp .env-development .env

production:
	cp .env-production .env

prep:
	rm -rf dist
	mkdir dist
	cp -r fonts images favicon.png sitemap.xml dist

css:
	node-sass src/app.scss -o dist --include-path node_modules --source-map true --source-map-contents

js:
	env $$(cat .env) rollup src/app.js -o dist/app.js -f iife -m -c

minify:
	node scripts/babel | uglifyjs -o dist/app.js -c -m --source-map content='dist/app.js.map',url='app.js.map'
	postcss dist/app.css -o dist/app.css -u autoprefixer -m
	cleancss dist/app.css -o dist/app.css -O2 --source-map --source-map-inline-sources

html:
	env $$(cat .env) rollup index.js -f cjs -e 'fs' -c | node > dist/index.html

setup:
	npm i \
		@whaaaley/hyperapp-object-view \
		@whaaaley/query-string \
		classcat \
		hyperapp
	npm i -D \
		@babel/core \
		@babel/plugin-proposal-object-rest-spread \
		@babel/plugin-transform-arrow-functions \
		@babel/plugin-transform-block-scoped-functions \
		@babel/plugin-transform-block-scoping \
		@babel/plugin-transform-computed-properties \
		@babel/plugin-transform-destructuring \
		@babel/plugin-transform-function-name \
		@babel/plugin-transform-parameters \
		@babel/plugin-transform-shorthand-properties \
		@babel/plugin-transform-spread \
		@babel/plugin-transform-template-literals \
		@hyperapp/render \
		@jamen/dev-server \
		autoprefixer \
		clean-css-cli \
		node-sass \
		postcss-cli \
		rollup \
		rollup-plugin-node-resolve \
		rollup-plugin-replace \
		uglify-js
