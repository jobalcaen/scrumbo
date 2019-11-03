# https://www.codingforentrepreneurs.com/blog/django-docker-production-heroku

# Base Image
FROM python:3.6.6-alpine3.6

# set working directory
WORKDIR /usr/src/app

# set default environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PKG_CONFIG_PATH="/usr/local/opt/libffi/lib/pkgconfig"

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev libressl-dev libffi-dev

# install environment dependencies
RUN pip3 install --upgrade pip
RUN pip3 install psycopg2 pipenv

# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh

# copy project to working dir
COPY . /usr/src/app

# Install project dependencies
RUN pip install -r requirements2.txt

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
