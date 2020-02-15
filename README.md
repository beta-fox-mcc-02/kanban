# kanban API Documentation

Nama database wajib: kanban-beta-fox

Base URL: `https://sheltered-garden-68847.herokuapp.com`	

**Home**	
----	
  Home route for test server status. It's return message `Welcome to Kanban API`

* **URL**	

  /

* **Method:**	

  `GET`	

* **Success Response:**	

  * **Code:** 200 <br />	
  *  **Content :** `Welcome to Kanban API`

--------------


**Register**	
----	
  Register User endpoints. Only accept real email. It would return error if email accepted is dummy email or invalid email. Valid email would be sent a verification email contains link verification.

* **URL**	

  /auth/register

* **Method:**	

  `POST`	

* **Data Params**	

  name : `string`  
  email : `string`    
  password : `string`

* **Success Response:**	

  * **Code:** 201 <br />	
  *  **Content :** 	
      ```json	
      {
        "msg": "Register success",
        "id": 99,
        "name": "nafies",
        "email": "nafies1@nafies.tech",
        "isVerified": false,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTgxNzMxMTIyfQ.Rmemzd4-SYiMcMcAPxB14QZXQWdgm-2d_M829gWc5sk"
      }
      ```	

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** 
     ```json
      { "msg" : "Internal Server Error" }
     ```	

  OR	

  * **Code:** 400 <br />	
  *  **Content:** 
      ```json
      {
        "msg": "Email has been registered. Please login or register with another email",
        "name": "duplicate_email"
      }
      ```	
  OR	

  * **Code:** 400 <br />	
  *  **Content:** 
      ```json
      {
        "msg": "email is not valid. please use a valid email"
      }
      ```	
--------------

**Login**	
----	
  Login User endpoints.	

* **URL**	

  /auth/login/	

* **Method:**	

  `POST`	

* **Data Params**	

  email : `string`    
  password : `string`

* **Success Response:**	

  * **Code:** 200 <br />	
  *  **Content :** 	
      ```json	
      {
        "msg": "Login success",
        "id": 2,
        "name": "Nafies",
        "email": "nafies1@nafies.tech",
        "isVerified": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTgxNzMwNjY5fQ.GkMi1N_llcF7QV7E2BGSOjNMqVpW42mE1hcyLigv9Ls"
      }
      ```	

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** 
     ```json
      { "msg" : "Internal Server Error" }
     ```	

  OR	

  * **Code:** 400 <br />	
  *  **Content:** 
      ```json
        {
          "name": "invalid email/password",
          "msg": "Email / Password is wrong"
        }
      ```	
--------------

**Google Sign**	
----	
  Endpoint for Sign in using Google Account.	

* **URL**	

  /auth/googleSign

* **Method:**	

  `POST`	

* **Data Params**	

  id_token : `string`    

* **Success Response:**	

  * **Code :** 200 	
  *  **Content :** 	
      ```json	
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgxNzMxNzUwfQ.qz5s1T1QWm9uTmUzj_L4mC2Tx-aOoi_6CXF1b-3HzJs",
        "msg": "user found",
        "id": 22
      }
      ```	
  OR

  * **Code:** 201 
  *  **Content :** 	
      ```json	
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgxNzMxNzUwfQ.qz5s1T1QWm0uTmUzj_L4mC2Tx-aOoi_6CXF1b-3HzJs",
        "msg": "user not found. Create user",
        "id": 22
      }
      ```	

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** 
     ```json
      { "msg" : "Internal Server Error" }
     ```	
--------------

**Verify User**
----	
  Endpoint for verify User. Unverified user can't update and delete.

* **URL**	

  /auth/verification/:token	

* **Method:**	

  `GET`	

* **Data Params**	

  None

* **Success Response:**	

  * **Code:** 200 <br />	
  *  **Content :** 	
      ```json	
      { 
        "msg": "'Account verified successfully'"
      }
      ```	

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** 
     ```json
      { "msg" : "Internal Server Error" }
     ```	

  OR	

  * **Code:** 400 <br />	
  *  **Content:** 
      ```json
        {
          "msg": "User not found"
        }
      ```	

  OR	

  * **Code:** 400 <br />	
  *  **Content:** 
      ```json
        {
          "msg": "Token is invalid. Please request new token"
        }
      ```	
--------------

**Get Task**
----
Returns data tasks.

* **URL**	

  /task

* **Method:**	

  `GET`	

* **Headers**	

  token: `string`

* **Success Response:**	

  * **Code:** 200 <br />	
  **  **Content:** 	
      ```json	
      [
        {
          "id": 1,
          "title": "mantap jiwa",
          "CategoryId": 1,
          "UserId": 1,
          "createdAt": "2020-02-14T18:24:17.013Z",
          "updatedAt": "2020-02-14T18:24:17.013Z",
          "Category": {
            "id": 1,
            "name": "Backlog",
            "createdAt": "2020-02-14T18:22:39.607Z",
            "updatedAt": "2020-02-14T18:22:39.607Z"
          },
          "User": {
            "id": 1,
            "name": "nafies",
            "email": "nafies.beta2@gmail.com",
            "isVerified": true,
            "verifToken": "xcsvfdkgnlfscla'CALM;SVFKNVCCAVSFKLKLCAVSFSC;AC'LVM;S"
          }
        }
      ]
      ```	

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** 
     ```JSON
      { "msg" : "Internal Server Error" }
     ```	

  OR	

  * **Code:** 400 <br />	
  *  **Content:** 
     ```JSON
      {
        "msg": "Please login first"
      }
     ```	
--------------	

**Get One Task**	
----	
  Get data one task.	

* **URL**	

  /task/:id	

* **Method:**	

  `GET`	

* **Headers**	

  token : `string`	

* **Success Response:**	

  * **Code:** 200 <br />	
  **  **Content:** 	
      ```json	
      {
          "id": 1,
          "title": "mantap jiwa",
          "CategoryId": 1,
          "UserId": 1,
          "createdAt": "2020-02-14T18:24:17.013Z",
          "updatedAt": "2020-02-14T18:24:17.013Z",
          "Category": {
            "id": 1,
            "name": "Backlog",
            "createdAt": "2020-02-14T18:22:39.607Z",
            "updatedAt": "2020-02-14T18:22:39.607Z"
          },
          "User": {
            "id": 1,
            "name": "nafies",
            "email": "nafies.beta2@gmail.com",
            "isVerified": true,
            "verifToken": "xcsvfdkgnlfscla'CALM;SVFKNVCCAVSFKLKLCAVSFSC;AC'LVM;S"
          }
        }
      ```	

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content :** 	
      ```json	
      {"msg" : "Internal Server Error" }
      ```	

  OR	

  * **Code:** 400 <br />	
  *  **Content :** 	
    ```json
    { "msg" : "No data found." }	
    ```	

--------------	

**Add Task**	
----	
  Add data task into db.	

* **URL**	

  /task	

* **Method:**	

  `POST`	

*  **Headers**		

   token : `string`	

* **Data Params**	

  title : `string`  
  CategoryId : `integer`

* **Success Response:**	

  * **Code:** 201 <br />	
  *  **Content:** 	
      ```json	
      {
        "msg": "Create task success"
      }
      ```	

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** 	
      ```json	
      { "msg" : "Internal Server Error" }	
      ```	

    OR	

  * **Code:** 400  <br />	
  *  **Content:** 	
      ```json	
      { "msg" : "You are not authorized" }	
      ```	

--------------	

**Update Task**	
----	
  Update data task.	

* **URL**	

  /task/:id	

* **Method:**	

  `PUT`	

*  **Headers**		

   token : `string`	

* **Data Params**	

  title : `string`   	

* **Success Response:**	

  * **Code:** 200 <br />	
  *  **Content:** 
     ```json
      {	
        "msg": "Update success"	
      }
     ```

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** `{ msg : "Internal Server Error" }`	

  OR	

  * **Code:** 400 <br />	
  *  **Content:** `{ msg : "You are not authorized" }`	


--------------	

**Change Category Id**	
----	
  Change category id of task.	

* **URL**	

  /task/:id	

* **Method:**	

  `PATCH`	

*  **Headers**		

   token : `string`		

* **Data Params**	

  CategoryId : `integer`	

* **Success Response:**	

  * **Code:** 200 <br />	
  *  **Content:** `	
     ```json
      {	
        "msg": "Change category success"	
      }
     ```

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** `{ msg : "Internal Server Error" }`	

  OR	

  * **Code:** 400 <br />	
  *  **Content:** `{ msg : "You are not authorized" }`	

--------------	

**Delete Task**	
----	
  Delete data task.	

* **URL**	

  /task/:id	

* **Method:**	

  `DELETE`	

*  **Headers**		

   token : `string`		

* **Success Response:**	

  * **Code:** 200 <br />	
  * **Content:** 
    ```json
      {	
        "msg": "Delete task success"	
      }
     ```

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** `{ msg : "Internal Server Error" }`	

  OR	

  * **Code:** 400  <br />	
  *  **Content:** `{ msg : "You are not authorized" }`

--------------	

**Get Categories**	
----	
  Get Categories from db.	

* **URL**	

  /category	

* **Method:**	

  `GET`	

*  **Headers**		

   token : `string`

* **Success Response:**	

  * **Code:** 200 <br />	
  * **Content:** 
    ```json
    [
      {
        "id": 1,
        "name": "Backlog",
        "createdAt": "2020-02-14T18:22:39.607Z",
        "updatedAt": "2020-02-14T18:22:39.607Z",
        "Tasks": [
          {
            "id": 1,
            "title": "mantap jiwa",
            "CategoryId": 1,
            "UserId": 1,
            "createdAt": "2020-02-14T18:24:17.013Z",
            "updatedAt": "2020-02-14T18:24:17.013Z"
          }
        ]
      },
      {
        "id": 2,
        "name": "Todo",
        "createdAt": "2020-02-14T18:22:39.607Z",
        "updatedAt": "2020-02-14T18:22:39.607Z",
        "Tasks": []
      }
    ]
     ```

* **Error Response:**	

  * **Code:** 500 <br />	
  *  **Content:** `{ msg : "Internal Server Error" }`	

  OR	

  * **Code:** 400  <br />	
  *  **Content:** `{ msg : "You are not authorized" }`
  
--------------	

**Unhandled Route**	
----	
  Handle undefined endpoint. It's return message `Route not found` with status code `404`

* **URL**	

  `/*`

* **Method:**	

  `any`	

* **Success Response:**	

  * **Code:** 404 <br />	
  *  **Content :** `Route not found`