FROM alpine
ENV ZOLA_PATH="/usr/bin/zola"
ENV DOCUMENT_ROOT="/site/public"

COPY . /site
WORKDIR /site
COPY docker/zola $ZOLA_PATH
RUN chmod +x "$ZOLA_PATH" && \
    chmod -R 777 /site

CMD ["$ZOLA_PATH", "build", "--output-dir" "$DOCUMENT_ROOT"]