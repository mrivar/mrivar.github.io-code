install:
	@echo "Installing libraries..."
	npm install

run:
	@echo "Running application locally..."
	npm run dev

run_prod:
	@echo "Running application locally (prod)..."
	npm run build
	npm run start
