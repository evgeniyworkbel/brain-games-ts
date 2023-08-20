install:
	npm ci

publish:
	npm publish --dry-run

link:
	sudo npm link

brain-games:
	npx ts-node --esm bin/brain-games.ts