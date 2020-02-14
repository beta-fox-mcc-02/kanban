# kanban

Nama database wajib: kanban-beta-fox

# KANBAN REST API

* **BASE URL**

  http://localhost:3000

# Register, Login & All User

**Register**
----
  Register as a new user of Kanban.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**

  * **Body:** <br />
    ```
    name        :string,
    email       :string,
    password    :string
    ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** <br>
    ```javascript
    {
        "id": 1,
        "name": "admin",
        "email": "admin@email.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** <br>
    ```javascript
    "email has already existed"
    ```
    OR
    ```javascript
    "email format required"
    ```
    OR
    ```javascript
    "Minimum password length is 6 characters"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Login**
----
  Login to access Kanban service.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**

  * **Body:** <br />
    ```
    email       :string,
    password    :string
    ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** <br>
    ```javascript
    {
        "access_token": 'your_token'
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** <br>
    ```javascript
    "username / password incorrect"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Get All Users**
----
  Get all user's data(password excluded) after login.

* **URL**

  /users

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    [
      {
          "id": 1,
          "name": "admin",
          "email": "admin@email.com",
          "createdAt": "2020-02-12T03:56:05.900Z",
          "updatedAt": "2020-02-12T03:56:05.900Z"
      },
      {
          "id": 8,
          "name": "mail",
          "email": "mail@gmail.com",
          "createdAt": "2020-02-12T13:28:30.253Z",
          "updatedAt": "2020-02-12T13:28:30.253Z"
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

# Organization

**Create New Organization**
----
  Create a new organization for compiling certain tasks.

* **URL**

  /organization

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

  * **Body:** <br />
    ```
    name:string
    ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** <br>
    ```javascript
    {
        "success": "New Organization has been created by <username>"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** <br>
    ```javascript
    "organization name required"
    ```

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Get All Organization**
----
  Get all user's organizations.

* **URL**

  /organization

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    [
        {
            "id": 1,
            "name": "startUp",
            "createdAt": "2020-02-12T07:44:25.632Z",
            "updatedAt": "2020-02-12T07:44:25.632Z",
            "OrganizationMember": {
                "OrganizationId": 1,
                "UserId": 1,
                "createdAt": "2020-02-12T07:44:25.682Z",
                "updatedAt": "2020-02-12T07:44:25.682Z"
            },
            "Tasks": [
                {
                    "id": 1,
                    "title": "Kanban Layout",
                    "description": "creating first kanban mockup layout",
                    "CategoryId": 1,
                    "OrganizationId": 1,
                    "createdAt": "2020-02-12T10:53:29.152Z",
                    "updatedAt": "2020-02-12T10:53:29.152Z",
                    "Users": [
                        {
                            "id": 1,
                            "name": "admin",
                            "email": "admin@email.com",
                            "createdAt": "2020-02-12T03:56:05.900Z",
                            "updatedAt": "2020-02-12T03:56:05.900Z",
                            "TaskUser": {
                                "TaskId": 1,
                                "UserId": 1,
                                "createdAt": "2020-02-12T10:53:29.206Z",
                                "updatedAt": "2020-02-12T10:53:29.206Z"
                            }
                        }
                    ],
                    "Category": {
                        "id": 1,
                        "name": "backlog",
                        "createdAt": "2020-02-12T01:52:24.140Z",
                        "updatedAt": "2020-02-12T01:52:24.140Z"
                    }
                }
            ]
        },
        {
            "id": 3,
            "name": "jumpFinish",
            "createdAt": "2020-02-12T13:16:27.970Z",
            "updatedAt": "2020-02-12T13:16:27.970Z",
            "OrganizationMember": {
                "OrganizationId": 3,
                "UserId": 1,
                "createdAt": "2020-02-12T13:16:28.036Z",
                "updatedAt": "2020-02-12T13:16:28.036Z"
            },
            "Tasks": []
        }
    ]j
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Get One Organization**
----
  Get one of user's organizations.

* **URL**

  /organization/:orgId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
        "id": 1,
        "name": "startUp",
        "createdAt": "2020-02-12T07:44:25.632Z",
        "updatedAt": "2020-02-12T07:44:25.632Z",
        "Users": [
            {
                "id": 1,
                "name": "admin",
                "email": "admin@email.com",
                "createdAt": "2020-02-12T03:56:05.900Z",
                "updatedAt": "2020-02-12T03:56:05.900Z",
                "OrganizationMember": {
                    "OrganizationId": 1,
                    "UserId": 1,
                    "createdAt": "2020-02-12T07:44:25.682Z",
                    "updatedAt": "2020-02-12T07:44:25.682Z"
                }
            }
        ],
        "Tasks": [
            {
                "id": 1,
                "title": "Kanban Layout",
                "description": "creating first kanban mockup layout",
                "CategoryId": 1,
                "OrganizationId": 1,
                "createdAt": "2020-02-12T10:53:29.152Z",
                "updatedAt": "2020-02-12T10:53:29.152Z",
                "Category": {
                    "id": 1,
                    "name": "backlog",
                    "createdAt": "2020-02-12T01:52:24.140Z",
                    "updatedAt": "2020-02-12T01:52:24.140Z"
                }
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Add One Member to the Organization**
----
  Get one user of Kanban and add to the organization. If the selected user is already a member of the organization, then the adding process will be failed.

* **URL**

  /organization/:orgId/add/:username

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

    `username=[string]`

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** <br>
    ```javascript
    {
      "success": "Adding member success"
    }
    ```
 "Member already existed in the organization"
* **Error Response:**

  * **Code:** 400 Bad Request <br />
      **Content:** <br>
      ```javascript
      "Member already existed in the organization"
      ```

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Update Organization**
----
  Update user's organization.

* **URL**

  /organization/:orgId

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

  * **Body:** <br />
    ```
    name:string
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
        "success": "Organization has updated successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Delete Organization**
----
  Delete user's organization.

* **URL**

  /organization/:orgId

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
        "success": "Organization has deleted successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

# Task

**Create New Task**
----
  Create a new task in one organization.

* **URL**

  /organization/:orgId/task

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

    `taskId=[integer]`


* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

  * **Body:** <br />
    ```
    title       :string,
    description :string
    ```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** <br>
    ```javascript
    {
        "success": "New Task has been created by admin"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** <br>
    ```javascript
    "task title required"
    ```

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Get One Task**
----
  Get one task from one organization.

* **URL**

  /organization/:orgId/task/:taskId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

    `taskId=[integer]`

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
      "id": 1,
      "title": "Kanban Layout",
      "description": "creating first kanban mockup layout",
      "CategoryId": 1,
      "OrganizationId": 1,
      "createdAt": "2020-02-12T10:53:29.152Z",
      "updatedAt": "2020-02-12T10:53:29.152Z",
      "Category": {
          "id": 1,
          "name": "backlog",
          "createdAt": "2020-02-12T01:52:24.140Z",
          "updatedAt": "2020-02-12T01:52:24.140Z"
      },
      "Organization": {
          "id": 1,
          "name": "startUp",
          "createdAt": "2020-02-12T07:44:25.632Z",
          "updatedAt": "2020-02-12T07:44:25.632Z"
      },
      "Users": [
          {
              "id": 1,
              "name": "admin",
              "email": "admin@email.com",
              "password": "$2a$10$dxHj3xKnfRPm4AD.W93CReMSsFJQuJa10r/KxOUgCLYHE4d6PWsbC",
              "createdAt": "2020-02-12T03:56:05.900Z",
              "updatedAt": "2020-02-12T03:56:05.900Z",
              "TaskUser": {
                  "TaskId": 1,
                  "UserId": 1,
                  "createdAt": "2020-02-12T10:53:29.206Z",
                  "updatedAt": "2020-02-12T10:53:29.206Z"
              }
          }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Assign One Member to the Task**
----
  Assign the member of the organization to the task.

* **URL**

  /organization/:orgId/task/:taskId/:userId

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

    `taskId=[integer]`

    `userId=[integer]`


* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
      "success": "Member has assigned to the task"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** <br>
    ```javascript
    "member has already assigned to the task"
    ```

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Remove One Member from the Task**
----
  Remove the member of the organization from the task.

* **URL**

  /organization/:orgId/task/:taskId/:userId

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

    `taskId=[integer]`

    `userId=[integer]`


* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
      "success": "Member has removed from the task"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Update Task**
----
  Update one task from one organization.

* **URL**

  /organization/:orgId/task/:taskId

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

    `taskId=[integer]`

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

  * **Body:** <br />
    ```
    title       :string,
    description :string,
    category_id :integer
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
      "success": "Task has updated successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** <br>
    ```javascript
    "task title required"
    ```
    OR
    ```javascript
    "only 4 categories available"
    ```

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Update Task's Category**
----
  Update one task's category from one organization.

* **URL**

  /organization/:orgId/task/:taskId

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

    `taskId=[integer]`

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

  * **Body:** <br />
    ```
    category_id :integer
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
      "success": "Category of the task has updated successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** <br>
    ```javascript
    "only 4 categories available"
    ```

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```

**Delete Task**
----
  Delete task from the organization.

* **URL**

  /organization/:orgId/task/:taskId

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

    `orgId=[integer]`

    `taskId=[integer]`

* **Data Params**

  **Required:**

  * **Header:** <br />
    ```
    access_token:integer(user's token)
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** <br>
    ```javascript
    {
      "success": "Task has deleted successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** <br>
    ```javascript
    "login required"
    ```
    OR
    ```javascript
    "authorized member only"
    ```

  * **Code:** 500 Internal Server Error <br />
      **Content:** <br>
      ```javascript
      "internal server error, problem might be occured while some process are done"
      ```