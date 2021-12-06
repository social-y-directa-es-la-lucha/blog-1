up:
	git pull
	make link_zola_dockerfile
	cd docker && \
	docker-compose up -d --force-recreate

build:
	make link_zola_dockerfile
	cd docker && \
	docker-compose build

serve:
	zola serve

link_zola_dockerfile:
	@ln -s docker/zola . || exit 0

init:
	git pull
	make link_zola_dockerfile
	cd docker && \
	sudo bash ./init-script.bash