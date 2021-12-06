FROM nginx

RUN set -x && SITE_NAME=$(echo "$SITE_URL" | cut -d"." -f1) && \
    apt-get update -y && \
    apt-get install -y software-properties-common && \
    add-apt-repository -y ppa:nginx/stable && \
    apt-get update -y && \
    apt-get install -y nginx && \
    echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
    chown -R www-data:www-data /var/lib/nginx


RUN add-apt-repository ppa:certbot/certbot && \
    apt-get update -y && \
    apt-get install -y certbot python-certbot-nginx

ADD nginx_conf /etc/nginx/sites-available/$SITE_URL
RUN ln -s /etc/nginx/sites-available/$SITE_URL /etc/nginx/sites-enabled/$SITE_NAME

#ADD config/$SITE_URL /etc/nginx/sites-available/$SITE_URL
#ADD certs/server.crt /etc/nginx/certs/server.crt
#ADD certs/server.key /etc/nginx/certs/server.key

EXPOSE 80 443
WORKDIR /etc/nginx
VOLUME ["/etc/letsencrypt"]
RUN echo "0 23 * * * certbot renew --dry-run" | crontab -
CMD ["nginx"]