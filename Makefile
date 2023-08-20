install:
	npm ci

publish:
	npm publish --dry-run

link:
	sudo npm link

brain-games:
	npx ts-node bin/brain-games.ts