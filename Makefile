install:
	npm ci

run:
	npx ts-node ./src/index.ts

publish:
	npm publish --dry-run

link:
	sudo npm link

brain-games:
	npx ts-node bin/brain-games.ts