up:
	git pull
	ln -s docker/zola . || exit 0
	cd docker && \
	docker-compose build && \
	docker-compose up -d

serve:
	zola serve