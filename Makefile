build:
	yarn
	yarn build

run:
	yarn
	yarn run dev

style:
	yarn lint:fix
	yarn format:fix

quality:
	yarn lint:check
	yarn format:check
