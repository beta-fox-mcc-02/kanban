**Show All Kanban**
----
  Returns json data about all Kanbans.

* **URL**

  /kanban

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
    {
      "data": [
          {
              "id": 103,
              "title": "Done 1",
              "CategoryId": 4,
              "UserId": 1,
              "createdAt": "2020-02-14T06:43:37.632Z",
              "updatedAt": "2020-02-14T06:43:37.632Z"
          },
          {
              "id": 125,
              "title": "Todo 3 cobalah",
              "CategoryId": 4,
              "UserId": 1,
              "createdAt": "2020-02-14T08:29:43.422Z",
              "updatedAt": "2020-02-14T08:29:43.422Z"
          },
          {
              "id": 136,
              "title": "jksabdjksa",
              "CategoryId": 3,
              "UserId": 1,
              "createdAt": "2020-02-14T08:53:41.213Z",
              "updatedAt": "2020-02-14T08:53:41.213Z"
          },
          {
              "id": 137,
              "title": "Completed 1",
              "CategoryId": 3,
              "UserId": 1,
              "createdAt": "2020-02-14T08:53:49.335Z",
              "updatedAt": "2020-02-14T08:53:49.335Z"
          },
          {
              "id": 139,
              "title": "coba coba kemana",
              "CategoryId": 4,
              "UserId": 1,
              "createdAt": "2020-02-14T08:53:56.816Z",
              "updatedAt": "2020-02-14T08:53:56.816Z"
          },
          {
              "id": 140,
              "title": "Todo 1 xx",
              "CategoryId": 1,
              "UserId": 1,
              "createdAt": "2020-02-14T08:53:59.120Z",
              "updatedAt": "2020-02-14T08:53:59.120Z"
          }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must register first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`
---

**Create Task**
----
  Create task.

* **URL**

  /kanban

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "message": "Success create data"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must register first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Show All Tasks by Category**
----
  Return all tasks with particular id.

* **URL**

  /kanban/:CategoryId

* **Method:**

  `GET`
  
*  **URL Params**

    **Required**

    CategoryId=[integer]

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "data": [
            {
                "id": 110,
                "title": "Todo",
                "CategoryId": 2,
                "UserId": 2,
                "createdAt": "2020-02-14T06:51:43.215Z",
                "updatedAt": "2020-02-14T06:51:48.407Z",
                "Category": {
                    "id": 2,
                    "name": "Todo",
                    "createdAt": "2020-02-13T14:18:24.188Z",
                    "updatedAt": "2020-02-13T14:18:24.188Z"
                }
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must register first" }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

---

**Get One Task by Id**
----
  Return one task with particular id.

* **URL**

  /kanban/card/:id

* **Method:**

  `GET`
  
*  **URL Params**

    **Required**

    id=[integer]

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "data": {
        "id": 140,
        "title": "Todo 1 xx",
        "CategoryId": 1,
        "UserId": 1,
        "createdAt": "2020-02-14T08:53:59.120Z",
        "updatedAt": "2020-02-14T08:53:59.120Z"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must register first" }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

---

**Update One Task**
----
  Update one task based on id.

* **URL**

  /kanban/:id

* **Method:**

  `PUT`
  
*  **URL Params**

    **Required**

    id=[integer]

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success update data"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must register first" }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Delete One Task**
----
  Delete one task based on id.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

    **Required**

    id=[integer]

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success delete data
    }
    ```
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Register User**
----
  Register a user.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      "access_token": "eyJhbIsInR5cCI6IkpXVCJ9.eyJpZCI6NCxNTgxNjc0NjE4fQ.wMFSchDraMBYqAEri6Tchl_0x2St831OGus"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 404 BAD REQUEST <br />
    **Content:** `{ message : "Email Already Exist" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Login User**
----
  Login a user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      "access_token": "eyJhbGciOinR5cCI6IkpXVCJ9.eyJpZCI6NCwigxNjc0NjE4fQ.wMFSchDraMBAEri6Tchl_0x2St831OGus"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 404 BAD REQUEST <br />
    **Content:** `{ message : "Email Already Exist" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Google Sign In**
----
  Login a user using google sign in.

* **URL**

  /gSignIn

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "access_token": "eyJhbzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWFgwODI2MTk1fQ.h56et9F8IbLIG6e5wvGtRC6oRDvpxHf8WO4rWs" 
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Not Found <br />
    **Content:** `{ message : "Email/Password Invalid" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---




