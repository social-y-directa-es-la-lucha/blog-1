up:
	make start_dir
	docker run -v ".:/app" --workdir /app balthek/zola:0.14.0 build
	cd docker && docker-compose up -d --force-recreate --remove-orphans

build:
	make start_dir
	cd docker && \
	docker-compose build

serve:
	zola serve

start_dir:
	@git pull --force

logs:
	cd docker && docker-compose logs -f

down:
	cd docker && \
	docker-compose down
	docker system prune -a