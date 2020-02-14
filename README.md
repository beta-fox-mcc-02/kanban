# KANBAN


## User Routes
| Route | HTTP | Request | Response | Description|
| ----------- | ----------- |----------- |----------- | ----------- |
| /register | POST | none |201(Created), 400(Bad Request), 500(Internal Server Error)|Register|
| /login | POST | none |200(OK), 400(Bad Request), 500(Internal Server Error)|Login|


## Task Routes
| Route | HTTP | Request | Response | Description|
| ----------- | ----------- |----------- |----------- | ----------- |
| /task | POST |title, description |201(Created), 400(Bad Request), 500(Internal Server Error)|Add Task|
| /tasks | GET |none|200(OK), 500(Internal Server Error)|Show Tasks|
| /tasks/:id | GET |none|200(OK), 404(Not Found), 500(Internal Server Error)|Show Task|
| /tasks/:id | PUT |title, description|200(OK), 400(Bad Request), 404(Not Found), 500(Internal Server Error)|Edit Task|
| /tasks/:id | DELETE |none|200(OK), 404(Not Found), 500(Internal Server Error)|Delete Task|
| /tasks/next/:id | PATCH |title, description|200(OK), 400(Bad Request), 404(Not Found), 500(Internal Server Error)|Move Task to Next Category|
| /tasks/previous/:id | PATCH |title, description|200(OK), 404(Not Found), 500(Internal Server Error)|Move Task to Previous Category|


## Category Routes
| Route | HTTP | Request | Response | Description|
| ----------- | ----------- |----------- |----------- | ----------- |
| /categories | GET | none |200(OK), 500(Internal Server Error)|Get All Categories|
| /categories/:id/tasks | GET | none |200(OK), 400(Bad Request), 500(Internal Server Error)|Get the List of Tasks for One Category|