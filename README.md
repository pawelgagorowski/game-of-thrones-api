# backend-recruitment-challenge
We want to hire smart and ambitious people, therefore we prepared some recruitment challenge. It is important for us to see how you deal with this kind of task, which is very similar to what we are working on every day.

## Challenge description
Problem to solve: as we are fans of the game of thrones, we would like to have an application which can show the great houses of the Seven Kingdoms with a few members.

### STEP 1 - Add endpoints
We need to add new endpoints for creation web service with simple endpoints. Below you can find the list of required endpoints:
- ( REST route: GET api/v1/clans ) - the endpoint return list of seven kingdoms clans with members of these clans.
    - Response:
        ```
        {
        "result": [ "Stark", "Lannister"]
        }        
        ```
- ( REST route: GET api/v1/clans/:clan/members ) - the endpoint return all members of specific clan of seven kingdoms.
    - Response:
        ```
        {
         "result": {
                	"clan": "Stark",
  	                "members": ["Arya", "Ned", "Sansa"]
                   }     
        }
        ```
- ( REST route: POST api/v1/clans) - the endpoint allow to add new great house (clan).
    - Request:
     ``` 
         {
           "name": „string” - example ( Stark, Baratheon ) 
         } 
     ```
    - Response:
        - Ok or error( handling in second step )
- ( REST route: POST api/v1/clans/:clan/members ) - the endpoint allow to assign new member to specific great house (clan).
    - Request:
      ```
         {
           "name": „string” - example ( Stark, Baratheon ) 
           "surname": „string” - example ( Stark, Baratheon )
         } 
      ```
    - Response:
        - Ok or error( handling in second step )
- ( REST route: DELETE api/v1/clans/:name) - the endpoint allow to remove great house by name (clan).
    - Response:
        -  Ok or error( handling in second step )
- ( REST route: DELETE api/v1/clans/:clan/members:name ) - the endpoint to remove member of specific great house (clan).
    - Response:
         -  Ok or error( handling in second step )

### STEP 2 - create validations

The endpoints should obviously validate data (you can use Joi package). You need to define which kind of objects your endpoints accept. When user tries to send a request with not allowed data (e.g. invalid field name, type ), then your validation should reject these request and return an error message.

### STEP 3 - store data 

In the final step, you should choose a place where data will be stored. You can store data in the database ( PostgreSQL, MySQL, MariaDB or NoSQL database MongoDB ) or in a txt file or in memory ( Memcached, Redis ). We recommend you to use PostgreSQL with npm package Sequelize, but this is your choice what you will use. 

## How to run application?

1) install node.js version >= 10
2) clone repository
3) run following commands in command line:
- make install - install missing npm packages
- make lint - check warnings and errors in code
- make run - start application
4) use Postman or other client for test server. Ping endpoint details - method: GET url: http://localhost:3999/api/v1/ping

# Good luck!

# TIP: If you run into problems trying to start the application, pay extra close attention to the endpoint url.
