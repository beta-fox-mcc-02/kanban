## **KANBAN APP **

## **SHOW Todos**

Returns json data about all of Todos.

-   **URL**

    /todos

-   **Method:**

    `GET`

-   **URL Params**

    None

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**

        `{ "data": [ { "id": 3, "title": "Debug", "description": "Debug your code", "status": false, "due_date": "2020-02-03T06:40:04.112Z", "createdAt": "2020-02-03T07:10:44.850Z", "updatedAt": "2020-02-03T07:10:44.850Z" } ] }`

-   **Error Response:**

    -   **Code:** 500 INTERNAL SERVER <br />
        **Content:** `{ err<object> }`

## **INSERT Todo**

Insert todo to database and return object of inserted todo.

-   **URL**

    /todos

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

    `{ "title": "Debug", "description": "Debug your code", "status": false, "due_date": "2020-02-03T06:40:04.112Z" }`

-   **Success Response:**

    -   **Code:** 201 <br />
        **Content:**

        `{ "data": [ { "id": 3, "title": "Debug", "description": "Debug your code", "status": false, "due_date": "2020-02-03T06:40:04.112Z", "createdAt": "2020-02-03T07:10:44.850Z", "updatedAt": "2020-02-03T07:10:44.850Z" } ] }`

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:** `{ "err" : "Please enter the title | description | status | due_date" }`

## **UPDATE Todo**

Update specific todo and return object of updated todo.

-   **URL**

    /todos/:id

-   **Method:**

    `PUT`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

    `{ "title": "Debug", "description": "Debug your code", "status": false, "due_date": "2020-02-03T06:40:04.112Z" }`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**

        `{ "data": [ { "id": 3, "title": "Debug", "description": "Debug your code", "status": false, "due_date": "2020-02-03T06:40:04.112Z", "createdAt": "2020-02-03T07:10:44.850Z", "updatedAt": "2020-02-03T07:10:44.850Z" } ] }`

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:** `{ "err" : "Please enter the title | description | status | due_date }`

    -   **Code:** 404 NOT FOUND <br />
        **Content:** `{ "err" : "Err! Todo not found!" }`

## **DELETE Todo**

Delete specific todo and return object of deleted todo.

-   **URL**

    /todos/:id

-   **Method:**

    `DELETE`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**

        `{ "data": [ { "id": 3, "title": "Debug", "description": "Debug your code", "status": false, "due_date": "2020-02-03T06:40:04.112Z", "createdAt": "2020-02-03T07:10:44.850Z", "updatedAt": "2020-02-03T07:10:44.850Z" } ] }`

-   **Error Response:**

    -   **Code:** 500 INTERNAL SERVER <br />
        **Content:** `{ err<object> }`

    -   **Code:** 404 NOT FOUND <br />
        **Content:** `{ "err" : "Err! Todo not found!" }`
