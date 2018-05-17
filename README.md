# Middlewares.

> In order to use a promise, we need to make sure that it is resolved before it is actually called (in which case it will fail as it is still pending).

##### How I implemented basic Middleware in this project:

> I first made a GET request via axios to fetch some dummy data for the application. I saw that it was being called at the time it was still pending which lead to a broken page. Then I added a middleware to check if the action has a payload promise and if it did, it will be processed and if it didn't it will pass on the execution to the next middleware on the stack.
