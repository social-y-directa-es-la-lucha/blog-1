up:
	git pull
	ln -s docker/zola . || exit 0
	cd docker && \
	docker-compose up -d

build:
	ln -s docker/zola . || exit 0
	cd docker && \
	docker-compose build

serve:
	zola serve

init:
	git pull
	cd docker && \
	chmod +x init-script.bash && \
	sudo ./init-script.bash