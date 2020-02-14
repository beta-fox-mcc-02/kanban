# kanban

Nama database wajib: kanban-beta-fox


***Read Task***
----
  Returns json data about all todo list.
  
* **URL**

  /task

* **Method**

  `GET`

* **URL Params**
  
  None

* **Data Params**
  
  None

* **Success Response:**
  
  **Code:** 200 <br />
  **Content:** 
  ```javascript
    {
        "data" : [
            {
                id : 1,
                title : "title",
                description : "description"
            },...
        ]
    }

* **Error Response:**

  **Code:** 500 <br />
  **Content:** 
  ```javascript
    {   
        msg : 'something wrong with server or database'
    }
    ```



***Insert Task***
----
  Insert new todo list to json data.
  
* **URL**

  /task

* **Method**

  `POST`

* **URL Params**
  
  None

* **Data Params**
  
  **required**

  ```javascript
  {
      title : "title",
      description : "description",
  }
  ```

* **Success Response:**
  
  **Code:** 201 <br />
  **Content:** 
  ```javascript
    {   "data" : 
        {
            id : 1, 
            title : "task1", 
            description : "description"
        },
            msg : "insert new data succes"
    }
    ````

* **Error Response:**

  **Code:** 400 <br />
  **Content:** 
  ```javascript
    {
        msg : 'Empty is not allowed'
    }
    ```

  **Code:** 500 <br />
  **Content:** 
  ```javascript
    {
        msg : 'something wrong with server or database'
    }
    ```

***Update Task***
----
  Update todo list in json data by id.
  
* **URL**

  /task/:id

* **Method**

  `PUT`

* **URL Params**
  
  **required**

  `id=[integer]`

* **Data Params**

  **required**

  ```javascript  
  {
      title : "title",
      description : "description",
      status : status,
      due_date : DATE
  }
  ```  
* **Success Response:**
  
  **Code:** 200 <br />
  **Content:** 
  ```javascript
    {
      msg : 'todo Id ${id} successfuly updated'
    }
    ```

* **Error Response:**

  **Code:** 400 <br />
  **Content:** 
  ```javascript
    {
        msg : 'Empty is not allowed'
    }
    ```

  **Code:** 404 <br />
  **Content:** 
  ```javascript
    {
        msg : 'Data not Found'
    }
    ```

  **Code:** 500 <br />
  **Content:** 
  ```javascript
    {
        msg : 'something wrong with server or database'
    }
    ```

***Delete Task***
----
  Delete todo list in json data by id.
  
* **URL**

  /task/:id

* **Method**

  `DELETE`

* **URL Params**
  
  **required**

  `id=[integer]`

* **Data Params**

  None

* **Success Response:**
  
  **Code:** 200 <br />
  **Content:** 
  ```javascript
    {
      msg : 'todo Id ${id} successfuly deleted'
    }
    ```
* **Error Response:**

  **Code:** 404 <br />
  **Content:** 
  ```javascript
    {
        msg : 'Data not Found'
    }
    ```

  **Code:** 500 <br />
  **Content:** 
  ```javascript
    {
        msg : 'something wrong with server or database'
    }
    ```