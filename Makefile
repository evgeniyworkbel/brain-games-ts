install:
	npm ci

publish:
	npm publish --dry-run

link:
	sudo npm link

brain-games:
	npx ts-node --esm bin/brain-games.ts

brain-even:
	npx ts-node --esm bin/brain-even.ts

brain-calc:
	npx ts-node --esm bin/brain-calc.ts
