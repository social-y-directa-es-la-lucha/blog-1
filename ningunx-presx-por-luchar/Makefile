up:
	make start_dir
	make build
	docker-compose up -d --force-recreate --remove-orphans
	make logs

build:
	sh build

serve:
	zola serve

start_dir:
	@git pull --force

logs:
	docker-compose logs -f

down:
	docker-compose down
	docker system prune -a