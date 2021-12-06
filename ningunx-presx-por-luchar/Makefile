up:
	make start_dir
	cd docker && \
	docker-compose up -d --force-recreate

build:
	make start_dir
	cd docker && \
	docker-compose build

serve:
	zola serve

start_dir:
	@git pull
	@ln -s docker/init.sh . 2>/dev/null || exit 0

logs:
	cd docker && docker-compose logs

init:
	make start_dir
	cd docker && \
	sudo bash ./init-script.bash