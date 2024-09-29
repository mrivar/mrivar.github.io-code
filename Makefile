install:
	@echo "Installing libraries..."
	pnpm install

check:
	@echo "Nuxt can type-check your app using vue-tsc with nuxi typecheck command. Checking..."
	npx nuxi typecheck

run:
	@echo "Running application locally..."
	pnpm dev -o

run_prod:
	@echo "Running application locally (prod)..."
	npm run build
	npm run start

build:
	pnpm run generate
