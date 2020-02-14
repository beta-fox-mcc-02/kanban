## **KANBAN APP **

## **SHOW BOARDS**

-   **BASE URL**
    https://kanban-app-heri.herokuapp.com

Returns json data about all of Boards.

-   **URL**

    /boards

-   **Method:**

    `GET`

-   **URL Params**

    None

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**

           `{
            "data": [
                {
                "id": 2,
                "title": "Task 2",
                "UserId": 3,
                "createdAt": "2020-02-11T06:29:55.196Z",
                "updatedAt": "2020-02-11T06:29:55.196Z"
                }
            ]
            }`

-   **Error Response:**

    -   **Code:** 500 INTERNAL SERVER <br />
        **Content:** `{ err<object> }`

## **INSERT BOARD**

Insert Board to database and return object of inserted todo.

-   **URL**

    /boards

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

    `{
	"title": "Task 2"`

-   **Success Response:**

    -   **Code:** 201 <br />
        **Content:**

        `{
        "data": {
            "id": 26,
            "title": "Task 2",
            "UserId": 4,
            "updatedAt": "2020-02-14T16:05:16.993Z",
            "createdAt": "2020-02-14T16:05:16.993Z"
        }
        }`

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:** `{ "err" : "Please enter the title" }`

## **UPDATE Todo**

Update specific Boarn and return object of updated Board.

-   **URL**

    /board/:id

-   **Method:**

    `PATCH`

-   **URL Params**

    **Required:**

    `id=[integer]`

-   **Data Params**

    `{
	    "title": "Task New"
    }`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**

        `{
        "data": {
            "id": 22,
            "title": "Task New",
            "UserId": 3,
            "createdAt": "2020-02-12T10:23:09.666Z",
            "updatedAt": "2020-02-14T16:10:53.328Z"
        }
        }`

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:** `{ "err" : "Please enter the title }`


## **DELETE BOARD**

Delete specific board and return object of deleted board.

-   **URL**

    /board/:id

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

        `{
        "data": 1
        }`

-   **Error Response:**

    -   **Code:** 500 INTERNAL SERVER <br />
        **Content:** `{ err<object> }`

