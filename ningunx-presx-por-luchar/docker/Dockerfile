FROM ubuntu:latest

COPY . /site
WORKDIR /site

COPY docker/zola /usr/bin/zola

RUN apt-get update && \
    tar -C /usr/bin -xvzf /tmp/zola-v0.14.1-x86_64-unknown-linux-gnu.tar.gz && \
    chmod +x /usr/bin/zola

CMD ["/usr/bin/zola", "build"]