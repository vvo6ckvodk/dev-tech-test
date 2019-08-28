# Web Dev Test

## Running the application

The application can be run via Docker.
First, you will need to install the [Docker Engine](https://docs.docker.com/install/) if it isn't already installed.

You can then do `docker-compose up` to run the application.

The application will be available at `http://localhost:8080/`

Available URLs, example payloads, and responses are shown in the table below. Requests should be made with a `Content-Type` header value of `application/json`

| URL | Method | Example Request | Example Response |
| --- | --- | --- | --- |
| http://localhost:8080/cars | POST | `{"year": "2016", "make": "VW", "model": "Golf"}`| `{"year": "2016", "make": "VW", "model": "Golf", "id":  "5d66c3563e79b7003681a2e7"}` |
| http://localhost:8080/cars/5d66c3563e79b7003681a2e7 | GET | | `{"year": "2016", "make": "VW", "model": "Golf", "id": "5d66c3563e79b7003681a2e7"}` |
| http://localhost:8080/cars/5d66c3563e79b7003681a2e7 | DELETE | | |

# Cars API

Your first task will be to fork and clone this repo and follow the instructions 
below.

Once you have finished, please email us the URL to your fork (**don't** issue a pull request).

Please make commits as you go (> 1 and < 100) and provide instructions to run the application.

## The Story

"As a consumer of a RESTFul API, I would like to be able to add, retrieve, and remove *cars*."


### The Acceptance Criteria

* Priority order is:
    1. add
    2. retrieve 
    3. remove
* A *car* has the following attributes:
    * id*
    * make
    * model
    * colour
    * year
* We do not require persistent storage at this stage (an in-memory store is fine).

*generated by the application on entry

(If the story needs to be broken down to fit into the sprint, please do so.)


## Subsequent stories

These are stretch goals if you have time (you can do them in any order):

* "As a Developer, I want my code to be covered by tests, so I know if a change has broken something"
* "As a Consumer of the API, when reading the car model information I would like to see an additional field containing a string of a few words that sound like the model of the cars I have added" (using [http://www.datamuse.com/api/](http://www.datamuse.com/api/) as the source).
* "As a Consumer of the API, I would like to be able to update my existing cars"
* "As a Consumer of the API, I would like any cars I add through the API to persist between application restarts (persistent storage)"
* "As a Consumer of the API, I would like cars to be represented as two separate, hierarchically linked resources: 
    1. *Make*
    1. *Model*


## Limitations

You can use whatever online resources you want (aside from copy-pasting large chunks of code).

You are encouraged to use any frameworks or libraries you feel comfortable with.

You will be asked about the code you submit so you should be able to explain why every line is there.
