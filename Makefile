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
	pnpm run build
	pnpm run start

build:
	@echo "Building application..."
	pnpm run build

build_github_pages:
	@echo "Building application for Github Pages..."
	npx nuxt build --preset github_pages
