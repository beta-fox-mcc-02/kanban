# Kanban Server

Base url: <http://localhost:3000>

## **Register**

Return json access token after user register

-   **URL**

    /users/register

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `username=[string]`\
      `password=[string]`\
      `email=[string]`\
      `first_name=[string]`

      **Optional:**

      `last_name=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsInVzZXJuYW1lIjoiam9objE5OTAiLCJlbWFpbCI6ImpvaG5Ad3dlLmNvbSIsImluaXRpYWwiOiJKQyIsImlhdCI6MTU4MTY3NTY1N30.qI98OcfQ8AB-d3zZpITeU32mmDGBgYSvWw-dWneS75g"
        }
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Username is required",
                "Email is required",
                "Password is required",
                "Firstname is required"
            ],
            "message": "Bad Request"
        }
        ```

     -  **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "email must be unique"
            ],
            "message": "Bad Request"
        }
        ```

## **Login**

Returns json access token data when user login

-   **URL**

    /users/login

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `email=[string]`\
      `password=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoiam9obkB3d2UuY29tIiwidXNlcm5hbWUiOiJqb2huMTk5MCIsImluaXRpYWwiOiJKQyIsImlhdCI6MTU4MTY3NjA3MX0.FE_EWNY3i0XwSF3dtdA6xZKfA5HCEU93r-6YLrsYm-w"
        }
        ```

-   **Error Response:**

     -  **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**
        ```json
        {
            "status": 500,
            "errors": [
                "Illegal arguments: undefined, string"
            ],
            "message": "Error"
        }
        ```

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Email / password is incorrect"
            ],
            "message": "LOGIN_FAILED"
        }
        ```

## **Google Login**

Returns json access token when user login or register by google.

- **Headers**

    token: `<token>`

-   **URL**

    /users/gLogin

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJoYW5zaW5zdXNhdHlhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiSGFuc2luIFN1c2F0eWEiLCJpbml0aWFsIjoiSFMiLCJpYXQiOjE1ODE2NzcwMTF9.Ol7Dw3zwqVTg3D_ZhPU-9iVuhd931L8MzOOQYPlF8zU"
        }
        ```
    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
            "status": 500,
            "errors": [
                "The verifyIdToken method requires an ID Token"
            ],
            "message": "Error"
        }
        ```

    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
            "status": 500,
            "errors": [
                "Can't parse token envelope: yJhbGciOiJSUzI1NiIsImtpZCI6Ijc2MmZhNjM3YWY5NTM1OTBkYjhiYjhhNjM2YmYxMWQ0MzYwYWJjOTgiLCJ0eXAiOiJKV1QifQ': Unexpected token Ș in JSON at position 0"
            ],
            "message": "SyntaxError"
        }
        ```
## **Get categories**

Returns json categories include tasks based logged user

- **Headers**

    Authorization: Bearer `<token>`

-   **URL**

    /categories

-   **Method:**

    `GET`

-   **URL Params**

    None

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        [
            {
                "id": 16,
                "name": "Open",
                "user_id": 11,
                "createdAt": "2020-02-14T07:41:42.660Z",
                "updatedAt": "2020-02-14T07:41:46.414Z",
                "Tasks": [
                    {
                        "id": 47,
                        "title": "Homepage",
                        "description": null,
                        "category_id": 16,
                        "user_id": 11,
                        "createdAt": "2020-02-14T07:56:57.470Z",
                        "updatedAt": "2020-02-14T08:42:58.810Z"
                    }
                ]
            },
        ]
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Please login first"
            ],
            "message": "LOGIN_FAILED"
        }
        ```

    -   **Code:** 400 INVALID TOKEN <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "invalid token"
            ],
            "message": "JsonWebTokenError"
        }
        ```

## **Create category**

  Returns json data when user create category

- **Headers**

    Authorization: Bearer `<token>`

-   **URL**

    /categories

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

    **Required:**

    `name=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "newCategory": {
                "id": 21,
                "name": "Open",
                "user_id": 16,
                "updatedAt": "2020-02-14T10:52:15.522Z",
                "createdAt": "2020-02-14T10:52:15.522Z"
            }
        }
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Category name is required"
            ],
            "message": "Bad Request"
        }
        ```
    -   **Code:** 400 LOGIN FAILED <br />
        **Content:**

        ```json
        {
            "status": 400,
            "errors": [
                "Please login first"
            ],
            "message": "LOGIN_FAILED"
        }
        ```

     -   **Code:** 400 INVALID TOKEN <br />
        **Content:**

        ```json
        {
            "status": 400,
            "errors": [
                "invalid token"
            ],
            "message": "JsonWebTokenError"
        }
        ```


## **Update Category**

  Returns json data when user update category by id

- **Headers**

    Authorization: Bearer `<token>`

-   **URL**

    /categories/:id

-   **Method:**

    `PUT`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

    `name=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        [
            1,
            [
                {
                    "id": 21,
                    "name": "Done",
                    "createdAt": "2020-02-14T10:52:15.522Z",
                    "updatedAt": "2020-02-14T10:59:27.485Z",
                    "user_id": 16
                }
            ]
        ]
        ```

-   **Error Response:**

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "You are not authorized to access this category"
            ],
            "message": "NOT_AUTHORIZED"
        }
        ```

    -   **Code:** 400 LOGIN FAILED <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Please login first"
            ],
            "message": "LOGIN_FAILED"
        }
        ```

    -   **Code:** 400 INVALID TOKEN <br />
        **Content:**

        ```json
        {
            "status": 400,
            "errors": [
                "invalid token"
            ],
            "message": "JsonWebTokenError"
        }
        ```

## **Get Task By Category**

  Returns json tasks by categories and logged user

- **Headers**

    Authorization: Bearer `<token>`

-   **URL**

    /tasks/category/:category_id

-   **Method:**

    `GET`

-   **URL Params**

    **Required:**

    `category_id=[integer]`

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        [
            {
                "id": 45,
                "title": "Task backlog1",
                "description": null,
                "category_id": 18,
                "user_id": 11,
                "createdAt": "2020-02-14T07:56:50.444Z",
                "updatedAt": "2020-02-14T11:59:32.087Z"
            },
            {
                "id": 50,
                "title": "Task 2",
                "description": null,
                "category_id": 18,
                "user_id": 11,
                "createdAt": "2020-02-14T12:53:35.064Z",
                "updatedAt": "2020-02-14T12:53:35.064Z"
            },
        ]
        ```

-   **Error Response:**

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "You are not authorized to access this category"
            ],
            "message": "NOT_AUTHORIZED"
        }
        ```

    -   **Code:** 400 LOGIN FAILED <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Please login first"
            ],
            "message": "LOGIN_FAILED"
        }
        ```

    -   **Code:** 400 INVALID TOKEN <br />
        **Content:**

        ```json
        {
            "status": 400,
            "errors": [
                "invalid token"
            ],
            "message": "JsonWebTokenError"
        }
        ```

## **Get Task**

  Returns json data when user get task by id

- **Headers**

    Authorization: Bearer `<token>`

-   **URL**

    /tasks/:id

-   **Method:**

    `GET`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

     None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "id": 56,
            "title": "Make a homepage",
            "description": null,
            "category_id": 21,
            "user_id": 16,
            "createdAt": "2020-02-14T13:57:32.360Z",
            "updatedAt": "2020-02-14T13:57:32.360Z",
            "Category": {
                "id": 21,
                "name": "Done",
                "user_id": 16,
                "createdAt": "2020-02-14T10:52:15.522Z",
                "updatedAt": "2020-02-14T11:00:45.171Z"
            }
        }
        ```

-   **Error Response:**

    -   **Code:** 401 NOT AUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "You are not authorized to access this task"
            ],
            "message": "NOT_AUTHORIZED"
        }
        ```

    -   **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
            "status": 404,
            "errors": [
                "Task not found with id 111"
            ],
            "message": "NOT_FOUND"
        }
        ```

## **Create Task**

  Returns json data when user create task

-   **URL**

    /tasks

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `title=[string]`
      `category_id=[integer]`

      **Optional**

      `description=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
       {
            "id": 58,
            "title": "Make a landing page",
            "category_id": 21,
            "user_id": 16,
            "updatedAt": "2020-02-14T14:06:48.596Z",
            "createdAt": "2020-02-14T14:06:48.596Z",
            "description": null
        }
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Title is required"
            ],
            "message": "Bad Request"
        }
        ```

## **Update Task**

  Returns json data when user update task

-   **URL**

    /tasks/:id

-   **Method:**

    `PUT`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `id=[integer]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        [
            1,
            [
                {
                    "id": 56,
                    "title": "Make a homepage",
                    "description": null,
                    "category_id": 21,
                    "createdAt": "2020-02-14T13:57:32.360Z",
                    "updatedAt": "2020-02-14T14:18:21.643Z",
                    "user_id": 16
                }
            ]
        ]
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Title is required"
            ],
            "message": "Bad Request"
        },
        ```

    -   **Code:** 401 NOT AUTHORIZED <br />
        **Content:**
        ```json
       {
            "status": 401,
            "errors": [
                "You are not authorized to access this task"
            ],
            "message": "NOT_AUTHORIZED"
        }
        ```

## **Delete Task**

  Returns json data when user delete task

-   **URL**

    /tasks/:id

-   **Method:**

    `DELETE`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `id=[integer]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "message": "Delete task successfull"
        }
        ```

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
            "status": 404,
            "errors": [
                "Task not found with id 56"
            ],
            "message": "NOT_FOUND"
        }
        ```

    -   **Code:** 401 NOT AUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "You are not authorized to access this task"
            ],
            "message": "NOT_AUTHORIZED"
        }
        ```

