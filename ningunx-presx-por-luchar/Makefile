up:
	git pull
	ln -s docker/zola .
	cd docker && \
	docker-compose build && \
	docker-compose up -d

serve:
	zola serve