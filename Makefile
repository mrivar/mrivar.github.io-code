i install:
	@echo "Installing libraries..."
	pnpm install

c check:
	@echo "Nuxt can type-check your app using vue-tsc with nuxi typecheck command. Checking..."
	npx nuxi typecheck

r run:
	@echo "Running application locally..."
	pnpm dev -o

rp run_prod:
	@echo "Running application locally (prod)..."
	pnpm run build
	pnpm run start

b build:
	@echo "Building application..."
	pnpm run build

build_github_pages:
	@echo "Building application for Github Pages..."
	npx nuxt build --preset github_pages

d deploy:
	@echo "Deploying to Github Pages..."
	./deploy.sh
