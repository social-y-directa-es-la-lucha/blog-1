FROM alpine
ENV ZOLA_PATH="/usr/bin/zola"
ENV OUTPUT_DIR="/site/public"
COPY docker/zola $ZOLA_PATH
RUN chmod +x "$ZOLA_PATH" && \
    ls /usr/bin | grep "zola"

WORKDIR /site
RUN chmod -R 777 .
CMD ["zola", "build", "--output-dir" "$OUTPUT_DIR"]