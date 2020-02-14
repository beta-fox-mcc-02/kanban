# Task routes
Base url : http://localhost:3000/

**Show Task**
----
  Returns all json task data.

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**
   
   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
        {
            "id": 3,
            "title": "Learn REST API",
            "description": "Learn how to create RESTful API !",
            "UserId": 1,
            "CategoryId" : 2,
            "createdAt": "2020-02-03T06:44:03.841Z",
            "updatedAt": "2020-02-03T06:44:03.841Z"
        },
         {
            "id": 2,
            "title": "Learn KANBAN",
            "description": "Learn KANBAN !",
            "UserId": 1,
            "CategoryId" : 2,
            "createdAt": "2020-02-03T06:44:03.841Z",
            "updatedAt": "2020-02-03T06:44:03.841Z"
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 SERVER ERROR <br />
    **Content:** `{ msg : "Server error" }`
 

**Create Task**
----
  Create json task data.

* **URL**

  /task

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**
   
   `title=[STRING]` \
   `desciprtion=[STRING]` \
   `UserId=[INTEGER]` \
   `CategoryId=[INTEGER]` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
         "data": {
            "id": 4,
            "title": "Learn REST API",
            "description": "Learn REST API",
            "UserId": 1,
            "CategoryId" : 2,
            "updatedAt": "2020-02-03T10:41:06.941Z",
            "createdAt": "2020-02-03T10:41:06.941Z"
         },
         "msg": "success post task list"
      }
    ```
 
* **Error Response:**

  * **Code:** 401 BAD REQUEST <br />
    **Content:** `{ msg : "Bad Request" }`


**Update Task**
----
  Update json task data.

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**
   
   `title=[STRING]` \
   `desciprtion=[STRING]` \
   `UserId=[INTEGER]` \
   `CategoryId=[INTEGER]` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
   ```json
   {
      "data": [
         1,
         [
            {
               "id": 4,
               "title": "Learn REST API",
               "description": "Learn REST API 2",
               "UserId": 1,
               "CategoryId" : 2,
               "createdAt":"2020-02-03T10:41:06.941Z",
               "updatedAt":"2020-02-03T10:49:08.909Z"
            }
         ]
      ],
         "msg": "success update by id"
   }
   ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "Page not found" }`

  * **Code:** 400 ERROR <br />
    **Content:** `{ msg : "Error" }`

**Show One Task Data**
----
  Show one json task data.

* **URL**

  /tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

   None   

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
   ```json
      {
        "data": {
        "id": 4,
        "title": "Learn REST API",
        "description": "Learn REST API 2",
        "UserId": 1,
        "CategoryId" : 2,
        "createdAt": "2020-02-03T10:41:06.941Z",
        "updatedAt": "2020-02-03T10:49:08.909Z"
      },
         "msg": "success get task by id"
      }
   ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "Page not found" }`

  * **Code:** 400 ERRO <br />
    **Content:** `{ msg : "Error" }`


**Delete Task**
----
  Delete json task data.

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**
   
   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
   ```json
      {
         "data": 1,
         "msg": "success delete task by id"
      }
   ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "Page not found" }`

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ msg : "Server error" }`


# User Router

**Create User**
----
  Create json user data.

* **URL**

  /users/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**
   
   `name=[STRING]` \
   `email=[STRING]` \
   `password=[String]` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
         "name" : "abcdefg",
         "email": "acbdefg@mail.com",
         "password" : "12312uu12e"
      }
    ```
 
* **Error Response:**

  * **Code:** 401 BAD REQUEST <br />
    **Content:** `{ msg : "Bad Request" }`


**User Login**
----
  User login data.

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**
   
   `email=[STRING]` \
   `password=[String]` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
         "email": "acbdefg@mail.com",
         "password" : "12312uu12e"
      }
    ```
 
* **Error Response:**

  * **Code:** 401 BAD REQUEST <br />
    **Content:** `{ msg : "Bad Request" }`