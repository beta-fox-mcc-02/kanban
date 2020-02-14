Database name: kanban-beta-fox

# **KANBAN**
***
## 1. Register New user.

* **URL**

    http://localhost:3000/user/register

* **Method:**

    `POST`

* **Request Header:**

    ```javascript
    { "Content-Type": "application/json" }
    ```

* **Request Body:** 

    ```javascript
        {
            "name": "",
            "email": "andrumahardif@rocketmail.com",
            "password": "qqqqq"
        }
    ```

* **Success Response:**

    * **Code:** 201 <br />
    * **Content:** 
    ```javascript
        {
            "msg": "Successfully added andrumahardif@rocketmail.com"
        }
    ```
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
  * **Content:** `{ error : "Internal Server Error" }`

  * **Code:** 400 Bad Request <br />
  * **Content:** `{ "msg": "INPUT EXIST" }`


***
## 2. Logged in already existed user to kanban.

* **URL**

    http://localhost:3000/user/login

* **Method:**

    `POST`

* **Request Header:**

    ```javascript
    { "Content-Type": "application/json" }
    ```

* **Request Body:** 

    ```javascript
        {
            "email": "mail@mail.com",
            "password": "12345"
        }
    ```

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:** 
    ```javascript
        {
            "token": "eyJhbGciUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoiYW5kcnVtYWhhcmRpZkByb2NrZXRtYWlsLmNvbSIsImlhdCI6MTU4MTY4NjMxNH0.hSuyvQAhyXSIS8dfa6VCiCTDSPWvOU",
            "name": "username"
        }
    ```
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** 
    ```javascript
        {
            "msg": "INPUT NOT FOUND"
        }
    ```

  OR

    * **Code:** 500 Internal Server Error <br />
    * **Content:** `{ error : "Internal Server Error" }`

  OR

    * **Code:** 400 Bad Request <br />
    **Content:** 
    ```javascript
        {
            "msg": "INPUT INVALID"
        }
    ```

***
## 3. Create new task.

* **URL**

    HTTP://localhost:3000/task/create

* **Method:**

    `POST`

* **Request Header:**

    ```javascript
    { 
        "Content-Type": "application/json",
        "access_token": "aiudasdsasad2y3tgdbadbwudbaiwdb"
    }
    ```

* **Request Body:** 

    ```javascript
        {
            "title": "new task",
            "category": "Backlog",
            "UserId": "1",
            "tag": "low priority"
        }
    ```

* **Success Response:**

    * **Code:** 201 <br />
    * **Content:** { msg: "Successfully added new task" }

* **Error Response:**

  * **Code:** 400 NOT FOUND <br />
    **Content:**  { "err": "Sequelize Validation Error" }

***
## 4. Find and show all data.

* **URL**

    http://localhost:3000/task/findall

* **Method:**

    `GET`

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:** 
    ```javascript
    [
        "data": 
            {
                "id": 1,
                "name": "backlog",
                "due_date": "2020-02-05T00:00:00.000Z",
                "createdAt": "2020-02-03T06:06:27.973Z",
                "updatedAt": "2020-02-03T08:03:54.558Z",
                "Tasks" : 
                [ 
                    { task1: {
                        User: [ { user1 } ] 
                    }}, 
                    { task2 }, 
                    { task3 } 
                ]
            }
    ]
    ```
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />
    * **Content:** `{ error : "Internal Server Error" }`

***
## 5. Get one selected initial data for edit form input.

* **URL**

    http://localhost:3000/task/update/:id

* **Method:**

    `GET`

* **URL Params**

    **Required:** <br>
    `id=[integer]`
    "selected task ID"

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:** 
    ```javascript
    {
        "updateReadyTask": {
            "id": 1,
            "title": "I wanna be a superman",
            "CategoryId": 1,
            "UserId": 2,
            "createdAt": "20-02-10",
            "updatedAt": "20-02-11"
        },
        "categoryNames": [ "Backlog", ...]
    }
    ```
* **Error Response:**

    * **Code:** 404 BAD REQUEST <br />
    **Content:** 
    ```javascript
    {
        "msg": "DATA NOT FOUND"
    }
    ```
    OR
    * **Code:** 500 Internal Server Error <br />
    * **Content:** `{ error : "Internal Server Error" }`

***
## 6. Update selected data.

* **URL**

    http://localhost:3000/task/update/:id

* **Method:**

    `PUT`

* **URL Params**

    **Required:** <br>
    `id=[integer]`
    "selected task ID"

* **Request Header:**

    ```javascript
    { 
        "Content-Type": "application/json",
        "access_token": "aiudasdsasad2y3tgdbadbwudbaiwdb"
    }
    ```

* **Request Body:** 

    ```javascript
        {
            "title": "new task2",
            "category": "Development",
            "UserId": "1",
            "tag": "low priority"
        }
    ```

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:** 
    ```javascript
    {
        "data": {
            "title": "new task2",
            "category": "Development",
            "UserId": "1",
            "tag": "low priority"
        },
        "msg": "Update successful"
    }

    ```
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />
    * **Content:** `{ error : "Internal Server Error" }`

    OR

    * **Code:** 400 Bad Request <br />
    * **Content:** `{ msg : "Unauthorized user" }`

***
## 7. Delete selected data.

* **URL**

    http://localhost:3000/task/delete/:id

* **Method:**

    `DELETE`

* **URL Params**

    **Required:** <br>
    `id=[integer]`
    "selected task ID"

* **Request Header:**

    ```javascript
    { 
        "Content-Type": "application/json",
        "access_token": "aiudasdsasad2y3tgdbadbwudbaiwdb"
    }
    ```

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:**  { "msg": "Delete successful" }

* **Error Response:**

    * **Code:** 500 Internal Server Error <br />
    * **Content:** `{ error : "Internal Server Error" }`

    OR

    * **Code:** 400 Bad Request <br />
    * **Content:** `{ msg : "Unauthorized user" }`

***
## 8. Find all Users.

* **URL**

    http://localhost:3000/user/findAll

* **Method:**

    `GET`

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:**
    ```javascript
    [
        {
            result: 
            [
                {name: "superman", totalTask: 10},
                {name: "Batman", totalTask: 1}
            ]
        }
    ]
    ```

* **Error Response:**

    * **Code:** 500 Internal Server Error <br />
    * **Content:** `{ error : "Internal Server Error" }`

***
## 9. Third API google login.

* **URL**

    http://localhost:3000/user/glogin

* **Method:**

    `POST`

* **Request Body:**

    ```
    {
        data: id_token
    }
    ```

* **Success Response:**

    * **Code:** 200 <br />
    * **Content:**
    ```javascript
    {
        data: {
            token,
            name: data.name
        }
    }
    ```

* **Error Response:**

    * **Code:** 500 Internal Server Error <br />
    * **Content:** `{ error : "Internal Server Error" }`
    