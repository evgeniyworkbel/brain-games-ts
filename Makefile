install:
	yarn install

run:
	yarn ts-node ./src/index.ts

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.ts