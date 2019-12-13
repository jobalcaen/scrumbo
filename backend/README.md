## How to Use

To use this project, follow these steps:

1. Install python packages listed in the requirements file

2. Run the redis docker:
     docker run -p 6379:6379 -d redis:2.8

3. Start the django:
    python manage.py runserver

4. Navigate to the web app:
     http://127.0.0.1:8000/

Useful docker commands:
- Start a bash shell in the django container:
     1. docker ps and get the docker container
     2. docker exec -t -i 458fa618bc21 bash

- connect to the posgres DB:
     docker-compose exec db psql --username=scrumbo_user --dbname=scrumbo

     the username and dbname are set by environment variables
