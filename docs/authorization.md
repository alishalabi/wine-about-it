<h1>Authorization</h1>

Every page on the /admin is login-gated. We use a salt hashing method, deploying JWT's.

/admin routes are not available anywhere in the front-end. If a user attempts to manually enter any /admin url's, they will be re-directed to login page.
