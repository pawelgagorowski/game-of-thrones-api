# backend-recruitment-challenge
We want to hire smart and ambitious people, therefore we prepared a recruitment challenge. It is important for us to see how you deal with this kind of task, which are very similar to what we are working on every day.

## Description
Problem to solve: as we are fans of the game of thrones, we would like to have an application which can show the great houses of the Seven Kingdoms with a few members.

### STEP 1 - endpoints
We need to add new endpoints for creation of REST service. Below you can find the list of required endpoints:

- ( REST route: GET api/v1/clans ) - the endpoint return list of seven kingdoms clans with members of these clans.
    - Response:
        ```
        {
        "clans": [{ "clan": "Stark",
  	                "members": ["Arya", "Ned", "Sansa"]
                  },
                  { "clan": "Baratheon",
  	                "members": ["Robert", "Stannis", "Renly"]
                  }]
        }
        ```
- ( REST route: GET api/v1/clans/:clan/members ) - the endpoint return all members of specific clan of seven kingdoms.
                                                   :clan - specific great house(Stark, Lannister, Greyjoy ...)
    - Response:
        ```
        {
          "clan": "Stark",
  	      "members": ["Arya", "Ned", "Sansa"]
        }
        ```
- ( REST route: POST api/v1/clans) - the endpoint allow to add new great house (clan).
    - Request:
     ```
         {
           "clan": „string” - example (Stark, Baratheon) 
         }
     ```
    - Response:
        - Ok or error(handling in second step )
- ( REST route: POST api/v1/clans/:clan/members ) - the endpoint allow to assign new member to specific great house (clan).
                                                    :clan - specific great house(Stark, Lannister, Greyjoy ...)
    - Request:
      ```
         {
           "name": „string” - example ( Arya, Robert ) 
           "surname": „string” - example ( Stark, Baratheon )
         }
      ```
    - Response:
        - Ok or error( handling in second step )
- ( REST route: DELETE api/v1/clans/:name) - the endpoint allow to remove clan by name - example ( Stark, Baratheon ).
    - Response:
        -  Ok or error( handling in second step )
- ( REST route: DELETE api/v1/clans/:clan/members/:name ) - the endpoint to remove member of specific great house (clan).
                                                           :clan - specific great house(Stark, Lannister, Greyjoy ...)
    - Response:
         -  Ok or error( handling in second step )

### STEP 2 - validation

The endpoints should obviously validate data (you can use Joi or ajv package).
You need to define which data will be valid for your endpoints.
When a user tries to send a request with not allowed data (e.g. invalid field name, type ), then your validation should reject this request and return an error message.

### STEP 3 - database

In the final step, you need to choose a data store. You can store data in the database ( PostgreSQL, MySQL, MariaDB or NoSQL database MongoDB ). We recommend you to use PostgreSQL with npm package Sequelize or TypeORM, but this is your choice what you will use.

## How to run application?

1) install node.js version >= 10.13
2) clone repository
3) run following commands in command line:
- make install - install missing npm packages
- make lint - check warnings and errors in code
- make run - start application
4) use Postman or other client for test server. Ping endpoint details - method: GET url: http://localhost:3999/api/v1/ping

# Good luck!

# TIP: If you run into problems trying to start the application, pay extra close attention to the endpoint url.
