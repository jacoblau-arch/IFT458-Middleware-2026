# Server Notes - Jacob Lau

Date: 2026-10-26

## Verified observations

* The Express backend listens on localhost:4000 and connects to MongoDB through Mongoose.
* The landing page is served from backend/public/index.html.
* The API uses /api/v1/users/signup, /api/v1/users/login, and /api/v1/books.
* Missing API\_VERSION previously mounted routes under undefined. The server now defaults to /api/v1.
* Signup and login return a JWT. Protected book requests send it in the Authorization Bearer header.
* CORS permits requests from the Expo app on localhost:8081 to the backend on port 4000.
* Authentication needs JWT\_SECRET, JWT\_EXPIRES\_IN, and JWT\_COOKIE\_EXPIRES\_IN. These are configured locally in config.env, which remains ignored and untracked.
* Database connection strings and JWT values must not be logged or included in screenshots.

## Tests performed

* Backend startup reported port 4000 and DB connection successful.
* Unauthenticated GET /api/v1/books returned 401, as expected.
* Browser signup returned 201; login returned 200.
* Browser-created synthetic book returned 201 and appeared in a subsequent authenticated GET (200).
* Two synthetic test accounts and one clearly labeled synthetic test book were created during verification. No existing records were edited or deleted.

## Evidence

* screenshots/jacob-lau/backend-page.jpg is the live backend landing page.
* screenshots/jacob-lau/backend-running-output.txt contains actual sanitized backend output.
* Backend Server.png captures the terminal running node server.js and reporting both port 4000 and a successful MongoDB connection.

