up:
	make start_dir
	sudo sh build
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