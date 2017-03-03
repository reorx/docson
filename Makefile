all: build

templates/%.js: templates/%.es6.js
	./node_modules/.bin/babel --presets es2015 $< > $@

templates: templates/box.js templates/signature.js

build: templates
	./node_modules/.bin/r.js -o build.js

clean:
	rm templates/box.js templates/signature.js

