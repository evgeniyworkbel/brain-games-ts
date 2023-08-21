install:
	npm ci

publish:
	npm publish --dry-run

link:
	sudo npm link

brain-even:
	npx ts-node --esm bin/brain-even.ts

brain-calc:
	npx ts-node --esm bin/brain-calc.ts

brain-gcd:
	npx ts-node --esm bin/brain-gcd.ts
