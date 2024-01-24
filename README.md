# WebApp Elevator Mock

![](https://img.shields.io/badge/Building-Process-green) ![](https://img.shields.io/badge/Python3-Django-brightgreen)

# Environment

- OS linux - Ubuntu 22
- Python 3.8+
- Django 4+.
- Sqlite3

# Before run

- Execute the Application isolated with virtualenv python3.

  ### create a virtual environment

  ```Bash
  python3 -m venv <name_env> -> example: elevator_env
  ```

  ### Active your virtual environment

  ```Bash
  source elevator_env/bin/activate
  ```

  ### Clone the project from github page

  ```Bash
  git clone https://github.com/VictorZ94/mock_elevator.git
  ```

Now you have all environment ready to get started working with it.

# Run Backend with Django

- Create DB:

  ### Move inside mock_elevator

  ```Bash
  cd mock_elevator
  ```

  Now you'll see your prompt to look like. `mock_elevator$`

  ### Install requirements

  ```Bash
  mock_elevator$ pip3 install -r requirements
  ```

- Migrations

  ### Run the command to create tables models of Django

  ```Bash
  mock_elevator$ python3 manage.py makemigrations
  ```

  ### Run the command to create models into DB

  ```Bash
  mock_elevator$ python3 manage.py migrate
  ```

- Data

- [Optional] can be uploaded data contained in folder fixtures

  ```Bash
  mock_elevator$ python3 manage.py loaddata fixtures/data_fixture.json
  ```

  Note: If you don't upload this data, you should be to create your own data to test this app

- Run elevator app backend

  ```Bash
  mock_elevator$ python3 manage.py runserver
  ```

- Now open your preferred browser and type the http address.
  ```Bash
  mock_elevator$ http://localhost:8000/
  ```

## Run Frontend with React

- Now enter to frontend folder

  ```Bash
  mock_elevator$ cd frontend
  ```

- install all dependencies

  ```Bash
  mock_elevator$ npm i
  ```

- run frontend server
  ```Bash
  mock_elevator$ npm run dev
  ```

## Created By

> Victor Zuluaga
