**MKANBAN**
----

*BASE URL: https://immense-refuge-43743.herokuapp.com/*


**Login** </br>
---
*URL: https://immense-refuge-43743.herokuapp.com/users*

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ token, username" }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : "Wrong username / email / password" }`

---

**Register**
---
*URL: https://immense-refuge-43743.herokuapp.com/users/register*

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ msg : "Register successful. Please sign in" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error" }`

---

**GSingnIn**
---
*URL: https://immense-refuge-43743.herokuapp.com/users/gsignin*

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ token, username" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error" }`


---

**findAll**
---
*URL: https://immense-refuge-43743.herokuapp.com/users/tasks*

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ tasks }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error" }`

---

**create**
---
*URL: https://immense-refuge-43743.herokuapp.com/users/tasks*

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ msg: "create tasks successful" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error" }`

---

**findOne**
---
*URL: https://immense-refuge-43743.herokuapp.com/users/tasks/:id*

* **Method:**

  `GET`

  **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ task }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error" }`

---

**update**
---
*URL: https://immense-refuge-43743.herokuapp.com/update*

* **Method:**

  `PUT`

  **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ msg: "Update tasks successful" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error" }`

---

**delete**
---
*URL: https://immense-refuge-43743.herokuapp.com/delete*

* **Method:**

  `DELETE`

  **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ msg: "Deelete tasks successful" }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error" }`