FROM php:8.1.0-fpm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    openssl \
    wget \
    npm


RUN wget -qO- https://deb.nodesource.com/setup_16.x | bash -

RUN apt-get install -y nodejs

RUN npm install -g @vue/cli

RUN apt-get install certbot -y

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www