up:
	git pull
	make link_zola_dockerfile
	cd docker && \
	docker-compose up -d

build:
	ln -s docker/zola . || exit 0
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
	chmod +x init-script.bash && \
	sudo ./init-script.bash