# kanban

Nama database wajib: kanban-beta-fox



**Title**
----
  create user

* **URL**

`/users/register` 

* **Method:**

`POST` 
  

*  **URL Params**

   **Required:**
 
`None` 

   **Optional:**
 
`None` 

* **Data Params**

`email, passwords` 

* **Success Response:**

  + **Code:** 201 <br />

    **Content:** `{ 
      "id": ...,
       "email": "...",
      "password": "...",
       "updatedAt": "...",
       "createdAt": "..."
     }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 

  OR

  + **Code:** 400 <br />

    **Content:** `{ errors : [....] }` 

**Title**
----
  login user

* **URL**

`/users/login` 

* **Method:**

`POST` 
  

*  **URL Params**

   **Required:**
 
`None` 

   **Optional:**
 
`None` 

* **Data Params**

`email, passwords` 

* **Success Response:**

  + **Code:** 200 <br />

    **Content:** `{ 
      "token": "...",
    "msg": "login successfully"
     }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 

  OR

  + **Code:** 404 <br />

    **Content:** `{ "msg": "email / password is wrong" }` 

 OR

  + **Code:** 400 <br />

    **Content:** `{ "msg": "there's no token in your headers" }` 

OR

+ **Code:** 401 <br />

    **Content:** `{ "msg": "invalid token" }` 

**Title**
----
  create user

* **URL**

`/users/register` 

* **Method:**

`POST` 
  

*  **URL Params**

   **Required:**
 
`None` 

   **Optional:**
 
`None` 

* **Data Params**

`email, passwords` 

* **Success Response:**

  + **Code:** 201 <br />

    **Content:** `{ 
      "id": ...,
       "email": "...",
      "password": "...",
       "updatedAt": "...",
       "createdAt": "..."
     }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 

  OR

  + **Code:** 400 <br />

    **Content:** `{ errors : [....] }` 


**Title**
----
  create project

* **URL**

`/projects/` 

* **Method:**

`POST` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`title` 

* **Success Response:**

  + **Code:** 201 <br />

    **Content:** `{ 
     "project": {
        "id": ...,
        "title": "...",
        "updatedAt": "...",
        "createdAt": "..."
    },
    "UserProject": {
        "UserId": ...,
        "ProjectId": ...,
        "updatedAt": "...",
        "createdAt": "...",
        "id": ...
    }}`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 



**Title**
----
  add collaborator

* **URL**

`/projects/addCollaborator` 

* **Method:**

`POST` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`UserId, ProjectId` 

* **Success Response:**

  + **Code:** 201 <br />

    **Content:** `{ 
     "UserId": ...,
    "ProjectId": ...,
    "updatedAt": "...",
    "createdAt": "...",
    "id": ...
    }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 

  OR

  + **Code:** 404 <br />

    **Content:** `{ "msg": "user doesn't exists" }` 

 OR

  + **Code:** 400 <br />

    **Content:** `{ "msg": "User already collaborating in this project" }` 

OR

+ **Code:** 401 <br />

    **Content:** `{ "msg": "invalid token" }` 



**Title**
----
  get one project

* **URL**

`/projects/:id` 

* **Method:**

`GET` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`None` 

* **Success Response:**

  + **Code:** 200 <br />

    **Content:** `{ 
    "id": ...,
    "title": "...",
    "createdAt": "...",
    "updatedAt": "...",
    "Tasks": [{...}, {...}]
    }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 


**Title**
----
  update project

* **URL**

`/projects/:id` 

* **Method:**

`PUT` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`title` 

* **Success Response:**

  + **Code:** 200 <br />

    **Content:** `{ 
     "id": ...,
    "title": "...",
    "createdAt": "...",
    "updatedAt": "..."
    }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 

  OR

  + **Code:** 404 <br />

    **Content:** `{ "msg": "cannot find project with id ${req.params.id}" }` 

**Title**
----
  delete project

* **URL**

`/projects/:id` 

* **Method:**

`DELETE` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`None` 

* **Success Response:**

  + **Code:** 200 <br />

    **Content:** `{ 
      msg: "Project with id ${req.params.id} has been deleted"
    }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 

  OR

  + **Code:** 404 <br />

    **Content:** `{ "msg": "cannot find project with id ${req.params.id}" }` 


**Title**
----
  delete collaborator

* **URL**

`/projects/collaborator/:id` 

* **Method:**

`DELETE` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`None` 

* **Success Response:**

  + **Code:** 200 <br />

    **Content:** `{ 
      msg: "removed user with id ${req.params.id} from project"
    }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 


**Title**
----
  add task

* **URL**

`/tasks/` 

* **Method:**

`POST` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`title, status, ProjectId` 

* **Success Response:**

  + **Code:** 201 <br />

    **Content:** `{ 
     "id": ...,
    "title": "...",
    "status": "...",
    "ProjectId": ...,
    "updatedAt": "...",
    "createdAt": "..."
    }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 


**Title**
----
  delete task

* **URL**

`/tasks/:id` 

* **Method:**

`DELETE` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`None` 

* **Success Response:**

  + **Code:** 200 <br />

    **Content:** `{ 
      msg: "Task with id ${req.params.id} has been deleted"
    }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 
    
    OR

  + **Code:** 404 <br />

    **Content:** `{ msg : 'cannot find task with id ${req.params.id}' }`


**Title**
----
  update task

* **URL**

`/tasks/:id` 

* **Method:**

`PUT` 
  

*  **URL Params**

   **Required:**
 
`headers: {token}` 

   **Optional:**
 
`None` 

* **Data Params**

`title, status` 

* **Success Response:**

  + **Code:** 200 <br />

    **Content:** `{ 
     "id": ...,
    "title": "...",
    "status": "...",
    "ProjectId": ...,
    "updatedAt": "...",
    "createdAt": "..."
    }`

 

* **Error Response:**

  + **Code:** 500 <br />

    **Content:** `{ msg : err.message }` 

    OR

  + **Code:** 404 <br />

    **Content:** `{ msg : 'cannot find task with id ${req.params.id}' }`