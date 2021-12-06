FROM ubuntu:latest
ENV ZOLA_PATH="/usr/bin/zola"

COPY . /site
WORKDIR /site
COPY docker/zola $ZOLA_PATH
RUN chmod +x $ZOLA_PATH

CMD ["$ZOLA_PATH", "build"]