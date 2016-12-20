all: build

.PHONY: templates
templates:
	./node_modules/.bin/babel --presets es2015 templates/box.es6.js > templates/box.js
	./node_modules/.bin/babel --presets es2015 templates/signature.es6.js > templates/signature.js

build: templates
	./node_modules/.bin/r.js -o build.js
