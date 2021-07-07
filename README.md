# kanban

* **URL**

  https://fathomless-hamlet-44488.herokuapp.com

* **Method:**

  `GET` | `POST` | `DELETE` | `PUT`


**Sign Up User**
----
  Returns json data token.

* **URL**

  /users/signUp

* **Method:**

  `POST`

*  **URL Params**

    None

* **Data Params**

  None

* **Headers**

  'Content-Type: application/json'
  
* **data-raw**

  ```json
  {
    "email": "user@mail.com",
    "password": "123456"
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** <br />
    ```json
    {
      "message": "sign up success",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYW16YWhAbWFpbC5jb20iLCJpYXQiOjE1ODA4MTU4NzV9.x9giDxABRbxn_uKUEU0uwESFv9mYsBaJdmphP3WKxqU"
    }
    ```
   
* **Error Response:**

  * **Code:** 500 <br />

      OR

  * **Code:** 400 <br />
    **Content:**
    ```json
    {
      "errObj": {
          "msg": "Bad Request",
          "errors": [
              "invalid email format",
              "password required minimum length 6",
              "email already exists"
          ]
      }
    }
    ```
**Sign In User**
----
  Returns json data token.

* **URL**

  /users/signIn

* **Method:**

  `POST`

*  **URL Params**

    None

* **Data Params**

  None

* **Headers**

  'Content-Type: application/json'
  
* **data-raw**

  ```json
  {
    "email": "user@mail.com",
    "password": "123456"
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    ```json
    {
      "message": "sign in success",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoYW16YWhAbWFpbC5jb20iLCJpYXQiOjE1ODA4MTU4NzV9.x9giDxABRbxn_uKUEU0uwESFv9mYsBaJdmphP3WKxqU"
    }
    ```
   
* **Error Response:**

  * **Code:** 500 <br />

      OR

  * **Code:** 400 <br />
    **Content:**
    ```json
    {
      "message": "invalid email or password"
    }
    ```

**Show Tasks**
----
  Returns json data about all tasks.

* **URL**

  /tasks

* **Method:**

  `GET`

*  **URL Params**

    None

* **Data Params**

  None

* **Headers**

  token: string

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    ```json
    {
        "msg": "success fetch tasks",
        "data": [
            {
            "id": 39,
            "title": "task",
            "description": "yang lain",
            "CategoryId": 4,
            "UserId": 14,
            "createdAt": "2020-02-14T07:48:25.237Z",
            "updatedAt": "2020-02-14T07:48:25.237Z"
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:** 
    
    ```json
    {
      "errObj": {
          "msg": "you have to login first"
      }
    }
    ```

**Show Task**
----
  Returns json data about a single task.

* **URL**

  /tasks/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Headers**

  token: string

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    ```json
    {
        "msg": "success find task id:2",
        "data": {
            "id": 2,
            "title": "task 1",
            "description": "pertamaya sdf a",
            "CategoryId": 1,
            "UserId": 2,
            "createdAt": "2020-02-13T09:18:50.130Z",
            "updatedAt": "2020-02-14T07:10:53.646Z"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />

    OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    
    ```json
    {
      "errObj": {
          "msg": "not found"
      }
    }
    ```
  
    OR
  
  * **Code:** 401 Unauthorized <br />
    **Content:** 
    
    ```json
    {
      "errObj": {
          "msg": "you have to login first"
      }
    }
    ```
    
**Create Task**
----
  Returns json data about new task.

* **URL**

  /tasks

* **Method:**

  `POST`

*  **URL Params**

    None

* **Data Params**

  None

* **Headers**

  'Content-Type: application/json',

  token: string
  
* **data-raw**

  ```json
  {
    "title": "task",
    "description": "yang lain",
    "CategoryId": 2
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** <br />
    ```json
    {
        "msg": "success create task",
        "data": {
            "id": 41,
            "title": "task",
            "description": "yang lain",
            "CategoryId": 2,
            "UserId": 14,
            "updatedAt": "2020-02-14T08:52:34.961Z",
            "createdAt": "2020-02-14T08:52:34.961Z"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />

      OR

  * **Code:** 400 <br />
    **Content:**
    ```json
    {
      "errObj": {
          "msg": "Bad Request",
          "errors": [
              "title cannot empty",
              "description cannot empty"
          ]
      }
    }
    ```

**Update Task**
----
  Returns json data about updated task.

  * **URL**

    /tasks/:id

  * **Method:**

    `PUT`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Headers**

  'Content-Type: application/json',
  
  token: string
    
  * **data-raw**

    ```json
    {
        "title": "task",
        "description": "pertama",
        "CategoryId": 1
    }
    ```

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />
      ```json
      {
        "msg": "success update task",
            "data": [
                1,
                [
                {
                    "id": 44,
                    "title": "task",
                    "description": "pertama",
                    "CategoryId": 2,
                    "UserId": 14,
                    "createdAt": "2020-02-14T09:50:03.622Z",
                    "updatedAt": "2020-02-14T16:43:34.767Z"
                }
                ]
            ]
      }
      ```
  
  * **Error Response:**

    * **Code:** 500 <br />

      OR

    * **Code:** 400 <br />
      **Content:**
      ```json
      {
        "errObj": {
            "msg": "Bad Request",
            "errors": [
                "title cannot empty",
                "description cannot empty"
            ]
        }
      }
      ```

    * **Code:** 404 NOT FOUND <br />
      **Content:**
      ```json
      {
        "errObj": {
            "msg": "not found"
        }
      }
      ```

      OR

    * **Code:** 401 Unauthorized <br />
      **Content:** 
      
      ```json
      {
        "errObj": {
            "msg": "you have to login first"
        }
      }
      ```

      ```json
      {
        "message": "not authorized"
      }
      ```

**Delete Task**
----

* **URL**

  /Tasks/:id

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Headers**

  'Content-Type: application/json',
  
  token: string

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    ```json
    {
      "data": 1,
      "msg": "success delete task id: 9"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />

    OR

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    ```json
    {
      "errObj": {
          "msg": "not found"
      }
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:** 
    
    ```json
    {
      "errObj": {
          "msg": "you have to login first"
      }
    }
    ```
    ```json
    {
      "message": "not authorized"
    }
    ```