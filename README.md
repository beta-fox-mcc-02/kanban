# kanban

Nama database wajib: kanban-beta-fox

 
**registration**
----
register user


* **URL**

  /user/regis

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**googleSignIn**
----
  login using oauth

* **URL**

  /user/googlesingin

  * **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**Login**
----
login user


* **URL**

  /user/login

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**User Projects**
----
get user projects


* **URL**

  /user/project

* **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            [array of user's project]
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**Add Project**
----
create new project


* **URL**

  /project/

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            { id: 57,
       name: 'ini punya doshi',
       createdAt: 2020-02-14T12:32:53.290Z,
       updatedAt: 2020-02-14T12:32:53.290Z
        },
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**Add Project**
----
create new project


* **URL**

  /project/

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            { id: 57,
       name: 'ini punya doshi',
       createdAt: 2020-02-14T12:32:53.290Z,
       updatedAt: 2020-02-14T12:32:53.290Z
        },
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**collaborate**
Add user to a project


* **URL**

  /project/collab

* **Method:**

  `post`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           { id: 57,
       UserId: 36,
       ProjectId: 5,
       createdAt: 2020-02-14T12:32:53.290Z,
       updatedAt: 2020-02-14T12:32:53.290Z,
       },
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**remove user**
remove user from a project


* **URL**

  /project/user/:userId/:projectId

* **Method:**

  `delete`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           1,
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**get user list**
list of users from a project


* **URL**

  /project/:id

* **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           [list of users in the project]
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**delete project**
remove a project


* **URL**

  /project/:id

* **Method:**

  `delete`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           1
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**edit project**
update a project


* **URL**

  /project/:id

* **Method:**

  `put`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           updated project
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**get user list**
get all tasks in a project


* **URL**

  /task/:id

* **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           [list of tasks in the project]
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**add task**
add a task a project


* **URL**

  /task/:id

* **Method:**

  `post`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           new task
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**delete task**
delete a task


* **URL**

  /task/:id

* **Method:**

  `delete`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           [list of users in the project]
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**edit task**
update a task


* **URL**

  /task/:id

* **Method:**

  `put`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
           updated task
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`
