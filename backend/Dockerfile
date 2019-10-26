FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD . /code
RUN pip install -r requirements.txt
COPY . /code/
CMD gunicorn my_app.wsgi:application --bind 0.0.0.0:$PORT