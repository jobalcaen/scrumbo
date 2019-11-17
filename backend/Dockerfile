# https://www.codingforentrepreneurs.com/blog/django-docker-production-heroku

# Base Image
# FROM python:3.6.6-alpine3.6
# FROM python:3.6.9-alpine
FROM python:3.6.9-alpine


# set working directory
WORKDIR /usr/src/app

# set default environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PKG_CONFIG_PATH="/usr/local/opt/libffi/lib/pkgconfig"
# DATABASE_URL is set here instead of in the env file as it needs to be set before collect static runs
ENV DATABASE_URL=postgres://scrumbo_user:scrumbo_password@db:5432/scrumbo

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev libressl-dev libffi-dev

# install environment dependencies
RUN pip3 install --upgrade pip
RUN pip3 install psycopg2

# # copy entrypoint.sh
# COPY ./entrypoint.sh /usr/src/app/entrypoint.sh

# copy project to working dir
COPY . /usr/src/app

# Install project dependencies
RUN pip3 install -r requirements.txt

# collect static files
RUN python manage.py collectstatic --noinput

# run entrypoint.sh
# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
