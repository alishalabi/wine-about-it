Welcome to "Wine About It" - an automatic wine/food pairing service.

This is a full-stack Node.js/Express.js project, that has both back-end and front-end components.

Dependencies:
- Node.js
- Express.js
- Mongo DB
- Body Parser
- Express Validator
- Express Handlebars
- Method Override
- Cookie Parser
- Jwt
- Mongoose

User pages/back-end routes:
- GET: "/" (Home)
- GET: "/grapes" (Return all grapes)
- GET: "/grapes/:id" (Return one grape based on id)


Admin pages/back-end routes:
- GET: "/admin" (Admin home)
- GET: "/admin/grapes/new" (Render new grape page, helper front-end)
- POST: "/admin/grapes" (Create one grape)
- GET: "/admin/grapes/:id" (Return one grape based on id)
- GET: "/admin/grapes/:id/edit" (Render new grape page, helper front-end)
- PUT: "/admin/grapes/:id" (Update one grape by id)
- DELETE: "/admin/grapes/:id" (Destroy one grape by id)
