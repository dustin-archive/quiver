
.ONESHELL:
.SILENT:

PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

all: ENV = env $$(cat .env-production)
start: ENV = env $$(cat .env-development)

all: prep css js minify html
	gzip -k -n -9 dist/app.css dist/app.js

demo: all
	dev-server dist --watch "src/**/*" "make"

start: prep css js html
	dev-server dist --watch "src/**/*.scss" "make css" --watch "src/**/*.js" "make js"

prep:
	rm -rf dist
	mkdir dist
	cp -r src/assets sitemap.xml dist

css:
	node-sass src/app.scss -o dist --include-path node_modules --source-map true --source-map-contents
	mv dist/app.css dist/app.css

js:
	$(ENV) rollup src/app.js -o dist/app.js -f iife -m -c

minify:
	node scripts/babel | uglifyjs -o dist/app.js -c -m --source-map "content='dist/app.js.map',url='app.js.map'"
	postcss dist/app.css -o dist/app.css -u autoprefixer -m
	cleancss dist/app.css -o dist/app.css -O2 --source-map --source-map-inline-sources

html:
	$(ENV) rollup src/index.js -f cjs -e fs -c | node > dist/index.html
