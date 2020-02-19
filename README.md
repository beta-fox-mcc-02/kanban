# kanban

Nama database wajib: kanban-beta-fox
https://young-retreat-16880.herokuapp.com/


***

# USER

# REGISTER USER
----
    register User. Create user to dataBASE.

* **URL**

  http://localhost:3000/register

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   

* **Data Params**

    name : string,   
    email : string   
    password : string    


# LOGIN USER
----
    Find acces user to get access.

* **URL**

  http://localhost:3000/login

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   

* **Data Params**
 
    email : string   
    password : string    


# LOGIN USER use Google Sign
----
    Find acces user to get access.

* **URL**

  http://localhost:3000/googleSign

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   

* **Data Params**
 
    email : string     


***
# CREATE with http status 201

## di Server
```
.then((user) => {
    let dataUser = {
        name : user.name,
        email : user.email,
        password : user.password
    }
    res.status(201).json({
        msg : "Created data user register is successfully",
        data : dataUser
    })
})
```

## Output ketika berhasil
```
{
    "msg": "Created data user register is successfully",
    "data": {
        "name": "hikma13",
        "email": "syariful17@mail.com",
        "password": "$2a$10$pbZm9AH8a5vGIQvSCbqGW.vVlKkNBJxU9ljj9d2WXonYG0RsTMiI2"
    }
}
```


# CREATE with http status 400
# Validation Model

## Initial Model USER
```
User.init({
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Username is not Empty'
        }
      }
    }, 
    email: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Email is not Empty'
        }
      }
    }, 
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Password is not Empty'
        },
        lengthPassword(value, next) {
          let passwordLength = value.length
          if (passwordLength >= 8) {
            next()
          } else {
            next('Minimal 8 characters')
          }
        }
      }
    }
  }
```
## Input User

```
{
    username : <empty> ,
    email : <empty>,
    password : 123456 <dibawah 8>
}
```

## Output err dari catch
```
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Minimal 8 characters",
            "type": "Validation error",
            "path": "password",
            "value": "12345",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "username": "",
                "email": "",
                "password": "12345",
                "updatedAt": "2020-02-09T17:10:21.124Z",
                "createdAt": "2020-02-09T17:10:21.124Z"
            },
            "validatorKey": "lengthPassword",
            "validatorName": null,
            "validatorArgs": [],
            "original": {
                "cause": {},
                "isOperational": true
            }
        },
        {
            "message": "Username is not Empty",
            "type": "Validation error",
            "path": "username",
            "value": "",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "username": "",
                "email": "",
                "password": "12345",
                "updatedAt": "2020-02-09T17:10:21.124Z",
                "createdAt": "2020-02-09T17:10:21.124Z"
            },
            "validatorKey": "notEmpty",
            "validatorName": "notEmpty",
            "validatorArgs": [
                true
            ],
            "original": {
                "validatorName": "notEmpty",
                "validatorArgs": [
                    true
                ]
            }
        },
        {
            "message": "Email is not Empty",
            "type": "Validation error",
            "path": "email",
            "value": "",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "username": "",
                "email": "",
                "password": "12345",
                "updatedAt": "2020-02-09T17:10:21.124Z",
                "createdAt": "2020-02-09T17:10:21.124Z"
            },
            "validatorKey": "notEmpty",
            "validatorName": "notEmpty",
            "validatorArgs": [
                true
            ],
            "original": {
                "validatorName": "notEmpty",
                "validatorArgs": [
                    true
                ]
            }
        }
    ]
}
```

## ErrorHandler di Server
```
if (err.name === 'SequelizeValidationError') {
    status = 400
    let errorMassages = []
    err.errors.forEach(error => {
        errorMassages.push(error.message)
    })
    objErr = {
        msg : "Bad Request",
        errors : errorMassages
    }
}
```

## Output ketika ErrorHandler sudah di setting di server
```
{
    "msg": "Bad Request",
    "errors": [
        "Minimal 8 characters",
        "Username is not Empty",
        "Email is not Empty"
    ]
}
```


***

# Validation DataBase (email = UNIQUE)

## Input User

```
{
    username : hikma16,
    email : syariful@mail.com, <anggap email ini sudah ada di database>
    password : 12345678
}
```

## Output err dari catch
```
{
    "name": "SequelizeUniqueConstraintError",
    "errors": [
        {
            "message": "email must be unique",
            "type": "unique violation",
            "path": "email",
            "value": "syariful@mail.com",
            "origin": "DB",
            "instance": {
                "id": null,
                "username": "hikma13",
                "email": "syariful@mail.com",
                "password": "$2a$10$CAqVWhnUleoHVFcGoniiWOz271OQ8Ppn7nnOGlKAfhhfwZbG2q1zG",
                "updatedAt": "2020-02-09T17:07:47.152Z",
                "createdAt": "2020-02-09T17:07:47.152Z"
            },
            "validatorKey": "not_unique",
            "validatorName": null,
            "validatorArgs": []
        }
    ],
    "fields": {
        "email": "syariful@mail.com"
    },
    "parent": {
        "name": "error",
        "length": 225,
        "severity": "ERROR",
        "code": "23505",
        "detail": "Key (email)=(syariful@mail.com) already exists.",
        "schema": "public",
        "table": "Users",
        "constraint": "custom unique for email",
        "file": "nbtinsert.c",
        "line": "570",
        "routine": "_bt_check_unique",
        "sql": "INSERT INTO \"Users\" (\"id\",\"username\",\"email\",\"password\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING *;",
        "parameters": [
            "hikma13",
            "syariful@mail.com",
            "$2a$10$CAqVWhnUleoHVFcGoniiWOz271OQ8Ppn7nnOGlKAfhhfwZbG2q1zG",
            "2020-02-09 17:07:47.152 +00:00",
            "2020-02-09 17:07:47.152 +00:00"
        ]
    },
    "original": {
        "name": "error",
        "length": 225,
        "severity": "ERROR",
        "code": "23505",
        "detail": "Key (email)=(syariful@mail.com) already exists.",
        "schema": "public",
        "table": "Users",
        "constraint": "custom unique for email",
        "file": "nbtinsert.c",
        "line": "570",
        "routine": "_bt_check_unique",
        "sql": "INSERT INTO \"Users\" (\"id\",\"username\",\"email\",\"password\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING *;",
        "parameters": [
            "hikma13",
            "syariful@mail.com",
            "$2a$10$CAqVWhnUleoHVFcGoniiWOz271OQ8Ppn7nnOGlKAfhhfwZbG2q1zG",
            "2020-02-09 17:07:47.152 +00:00",
            "2020-02-09 17:07:47.152 +00:00"
        ]
    },
    "sql": "INSERT INTO \"Users\" (\"id\",\"username\",\"email\",\"password\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING *;"
}
```

## ErrorHandler di Server
```
else if (err.name === 'SequelizeUniqueConstraintError') {
    status = 400
    objErr = {
        msg : "Bad Request",
        errors : ["email is already exists"]
    }
}
```

## Output ketika ErrorHandler sudah di setting di server
```
{
    "msg": "Bad Request",
    "errors": [
        "email is already exists"
    ]
}
```

***
***
# TASK
**Add Task**
----
    Make a new task and Returns json data which contains title, description, CategoryId, UserId, createdAt, updatedAt.

* **URL**

  http://localhost:3000/tasks

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   

* **Data Params**

    title : string,   
    description: string   
    CategoryId : integer,    
    UserId : integer

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
    "msg": "Add Task is successfully",
    "data": {
        "id": 6,
        "title": "create router task",
        "description": "CRUD",
        "CategoryId": 1,
        "UserId": 2,
        "updatedAt": "2020-02-12T01:46:05.209Z",
        "createdAt": "2020-02-12T01:46:05.209Z"
    }
}
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```javascript
    { 
        "msg" : 'bad request', 
        "errors" : ["Title is not empty"]
    }
    ```

  OR
    
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    { "msg" : "Internal Server Error" }
    ```

***
  **Get All Tasks**
----
  Returns array of json data for all available task each User.

* **URL**

  http://localhost:3000/tasks

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   none

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
    "msg": "get all data success",
    "data": [
        {
            "id": 19,
            "title": "dinner",
            "description": "with nafies",
            "CategoryId": 1,
            "UserId": 4,
            "createdAt": "2020-02-14T02:15:54.919Z",
            "updatedAt": "2020-02-14T02:15:54.919Z",
            "User": {
                "id": 4,
                "name": "Arika Isty Ainulqolbi",
                "email": "arika@gmail.com",
                "createdAt": "2020-02-12T09:45:15.116Z",
                "updatedAt": "2020-02-12T09:45:15.116Z"
            },
            "Category": {
                "id": 1,
                "name": "Backlog",
                "createdAt": "2020-02-12T00:03:46.606Z",
                "updatedAt": "2020-02-12T00:03:46.606Z"
            }
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    { "msg" : "Internal Server Error }
    ```


***
**Get Tasks based on ID**
----
  Returns json data for task contains title, description, categoryId, UserId, createdAt, updatedAt.

* **URL**

  http://localhost:3000/tasks/:id

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
    ```javascript
    {
    "msg": "Get data success",
    "dataTask": {
        "id": 6,
        "title": "create router task",
        "description": "CRUD",
        "CategoryId": 1,
        "UserId": 2,
        "createdAt": "2020-02-12T01:46:05.209Z",
        "updatedAt": "2020-02-12T01:46:05.209Z",
        "Category": {
            "id": 1,
            "name": "Backlog",
            "createdAt": "2020-02-12T00:03:46.606Z",
            "updatedAt": "2020-02-12T00:03:46.606Z"
        }
    },
    "dataCategories": [
        {
            "id": 1,
            "name": "Backlog",
            "createdAt": "2020-02-12T00:03:46.606Z",
            "updatedAt": "2020-02-12T00:03:46.606Z"
        },
        {
            "id": 2,
            "name": "Product",
            "createdAt": "2020-02-12T00:03:46.606Z",
            "updatedAt": "2020-02-12T00:03:46.606Z"
        },
        {
            "id": 3,
            "name": "Development",
            "createdAt": "2020-02-12T00:03:46.606Z",
            "updatedAt": "2020-02-12T00:03:46.606Z"
        },
        {
            "id": 4,
            "name": "Done",
            "createdAt": "2020-02-12T00:03:46.606Z",
            "updatedAt": "2020-02-12T00:03:46.606Z"
        }
    ]
}
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```javascript
    {
            msg : "Not Found",
            errors : ['is not found']
        }
    ```
***

**Update Task based on ID**
----
  edit one of attribute or attributes and Returns json data for task contains title, description, Category, createdAt, updatedAt.

* **URL**

  http://localhost:3000/tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

    title : string,   
    description: string   
    CategoryId : integer,    

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
    "msg": "Updated data successfully",
    "data": [
        1,
        [
            {
                "id": 6,
                "title": "Association",
                "description": "Perlu require model di controller",
                "CategoryId": 3,
                "UserId": 2,
                "createdAt": "2020-02-12T01:46:05.209Z",
                "updatedAt": "2020-02-13T04:10:51.723Z"
            }
        ]
    ]
    }
    ```
 
* **Error Response:**

     * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```javascript
    { 
        "msg" : 'bad request', 
        "errors" : ["Title is not empty"]
    }
    ```

    OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```javascript
    { "msg" : "Tas Is Not found" }
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    { "msg" : "Internal Server Error" }
    ```
***

**Delete Tasks based on ID**
----
  Returns json data contains total todo which deleted

* **URL**

  http://localhost:3000/tasks/:id

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
    ```javascript
    {
    "msg": "Delete data success",
    "data": 1
}
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```javascript
    {
            msg : "Not Found",
            errors : ['is not found']
        }
    ```

OR

* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    { "msg" : "Internal Server Error" }
    ```

***

