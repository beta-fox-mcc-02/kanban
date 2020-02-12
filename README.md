# KANBAN

**Register Account**
----
  Returns json new user data.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    ```
    first_name:string
    last_name:string
    email:string
    password:string
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "msg": "Register success"
    }
    ```
 
* **Error Response:**

    * **Code:** 404 <br />
    **Content:** 
    ```
    {
        "msg": "<based on validation error sequelize>"
    }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
        "msg": "Internal Server Error"
    }
    ```

----

**Login Account**
----
  Returns json user data from database.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    ```
    email:string
    password:string
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "msg": "login success",
        "token": <token>
    }
    ```
 
* **Error Response:**

    * **Code:** 404 <br />
    **Content:** 
    ```
    {
        "msg": "<based on validation error sequelize>"
    }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
        "msg": "Internal Server Error"
    }
    ```

----

**Create Task**
----
  Returns json new task.

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    ```
    title:string
    CategoryId:string
    UserId:string
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "msg": "create task suksess"
    }
    ```
 
* **Error Response:**

    * **Code:** 404 <br />
    **Content:** 
    ```
    {
        "msg": "<based on validation error sequelize>"
    }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
        "msg": "Internal Server Error"
    }
    ```

----


**Read Task**
----
  Returns json tasks from database.

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

    none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "tasks": [
            {
                "id": <integer>,
                "title": <strin>,
                "CategoryId": <integer>,
                "UserId": <integer>,
                "createdAt": <date>,
                "updatedAt": <date>,
                "User": {
                    "id": <integer>,
                    "first_name": <string>,
                    "last_name": <string>,
                    "email": <string>,
                    "password": <string>,
                    "createdAt": <date>,
                    "updatedAt": <date>
                },
                "Category": {
                    "id": <integer>,
                    "name": <string>,
                    "createdAt": <date>,
                    "updatedAt": <date>
                }
            }
        ]
    }
    ```
 
* **Error Response:**

    * **Code:** 404 <br />
    **Content:** 
    ```
    {
        "msg": "<based on validation error sequelize>"
    }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
        "msg": "Internal Server Error"
    }
    ```

----

**Delete Task**
----
  Returns json deleted.

* **URL**

  /tasks/:id

* **Method:**

  `delete`
  
*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "msg": "Succes deleted task"
    }
    ```
 
* **Error Response:**

    * **Code:** 404 <br />
    **Content:** 
    ```
    {
        "msg": "<based on validation error sequelize>"
    }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
        "msg": "Internal Server Error"
    }
    ```

----