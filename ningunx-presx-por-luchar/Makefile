up:
	git pull
	ln -s docker/zola . 2>/dev/null
	cd docker && \
	docker-compose build && \
	docker-compose up -d

serve:
	zola serve