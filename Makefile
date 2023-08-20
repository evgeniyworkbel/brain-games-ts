install:
	yarn install

run:
	yarn ts-node ./src/index.ts

publish:
	npm publish --dry-run

link:
	sudo YARN_IGNORE_PATH=1 yarn link

brain-games:
	npx ts-node bin/brain-games.ts