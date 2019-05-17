install:
	yarn install

run:
	rm -rf logs
	mkdir logs
	./node_modules/.bin/gulp run

configure: install gulp-build ## configure and build the project sources

lint:
	./node_modules/.bin/gulp lint

build:
	./node_modules/.bin/gulp build
