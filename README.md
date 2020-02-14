# kanban

## **Register new user account**

Create new user to database.

- **URL**

  /register

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  None

- **Data Params**
  email,
  password

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```javascript
    data: "{ id : 1, email : "admin@mail.com", password : "admin123" }"
    ```

* **Error Response:**

  - **Code:** 400 <br />
    **Content:**

    ```javascript
    err: "BAD REQUEST",
    msg: ["invalid email address"]

    OR
    err: "BAD REQUEST",
    msg: ["password must be at least 3 characters"]
    ```

## **Login user**

Login user.

- **URL**

  /login

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  None

- **Data Params**
  email,
  password

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```javascript

    email: "admin@mail.com",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkeDRTSkZ6enFxMVIwZjNiWWZGVEt1ZU5XY0UueTJ3ZDlQNjBDVGhPZGpocGpuc2tULmRoejYiLCJjcmVhdGVkQXQiOiIyMDIwLTAyLTA3VDAzOjE0OjE2LjU5MVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTAyLTA3VDAzOjE0OjE2LjU5MVoifSwiaWF0IjoxNTgxMDQ1Mjg5fQ.uVOTuSJTpP3opugTk7r2Itp2OTdkeUNjj7Sn563MQ-g"

    ```

* **Error Response:**

  - **Code:** 400 <br />
    **Content:**

    ```javascript
    err: "WRONG LOGIN DATA",
    msg: "USERNAME OR PASSWORD IS WRONG"
    ```

## **Login google**

Login user with google OAuth.

- **URL**

  /gsignin

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  None

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```javascript
    email: "admin@mail.com",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkeDRTSkZ6enFxMVIwZjNiWWZGVEt1ZU5XY0UueTJ3ZDlQNjBDVGhPZGpocGpuc2tULmRoejYiLCJjcmVhdGVkQXQiOiIyMDIwLTAyLTA3VDAzOjE0OjE2LjU5MVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTAyLTA3VDAzOjE0OjE2LjU5MVoifSwiaWF0IjoxNTgxMDQ1Mjg5fQ.uVOTuSJTpP3opugTk7r2Itp2OTdkeUNjj7Sn563MQ-g";
    ```

* **Error Response:**

  - **Code:** 400 <br />
    **Content:**

    ```javascript
    err: "WRONG LOGIN DATA",
    msg: "USERNAME OR PASSWORD IS WRONG"
    ```

## ** Kanban Board**

Display the kanban board and fetch the data after login.

- **URL**

  /task

- **Method:**

  `GET`

- **URL Params**
  **Required:**
  None

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    "meals": [
        {
            "title": "task 1"
        },
        {
            "title": "task 2"
        },
        {
            "title": "task 3"
        }
    ]
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** Add new task to kanban**

Add new task to kanban through backlog category.

- **URL**

  /create

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  none
- **Data Params**
  title: ['string']
  UserId: ['integer']
  CategoryId: ['integer']

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    {
        title: "list to backlog 1",
        UserId: 1,
        CategoryId: 1,
        msg: "Data created successfully"
    }
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** Delete task**

Delete task from kanban board by task.id

- **URL**

  /delete/:id

- **Method:**

  `DELETE`

- **URL Params**
  **Required:**
  id=['integer']

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    msg: "Data deleted successfully";
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** Find task**

Find task by task id to be edit.

- **URL**

  /update/:id

- **Method:**

  `GET`

- **URL Params**
  **Required:**
  id = ['integer']

- **Data Params**
  none

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```javascript
    data: ".....",
    msg: "Data found"
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** Update task**

Update task by task id.

- **URL**

  /update/:id

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  id=['integer']

- **Data Params**
  title: ['string']
  UserId: ['integer']
  CategoryId: ['integer']

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```javascript
    data: ".....",
    msg: "Data updated successfully"
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```
