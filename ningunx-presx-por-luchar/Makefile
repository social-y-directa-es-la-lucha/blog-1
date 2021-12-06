up:
	git pull
	ln -s docker/zola . 2>/dev/null; exit 0
	cd docker && \
	docker-compose build && \
	docker-compose up -d

serve:
	zola serve