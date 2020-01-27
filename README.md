# Description
as a great fan of the game of thrones I created API for the characters you like

###  endpoints

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

### validation

The endpoints are validated by Joi.

### database

PostgreSQL +  Sequelize

## How to run application?

- make install - install missing npm packages
- make lint - check warnings and errors in code
- make run - start application

## Enjoy
