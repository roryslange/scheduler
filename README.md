# scheduler
## Description
scheduler is a full stack web app that provides services similar to Jira. It's main purpose is to serve as a Kanban board for teams working to organize tasks throughout a continuous development cycle. This app was created to provide me with experience using Spring Boot, a backend framework that I will be using in the future. This project's purpose is to provide a real-world context to allow me to use Spring Boot to it's full potential through development of a full stack application. 
## Tech Stack
- React + Vite
- PostgreSQL
- Spring Boot (web, JPA for database config, management, and repository functions)
- Firebase (authentication, firestore)

## Instructions
1. Navigate to the `scheduler-api` directory.
2. Open the spring boot project in Intellij IDEA, or your preferred code editor (Intellij IDEA is free and provides tools useful to development with Spring Boot).
3. Ensure that postgres is installed on your machine and running.
4. Initialize a user with admin privileges on a database called 'scheduler'.
5. Start the api from the code editor (or in a terminal by running `scheduler-api/src/main/java/com/example/scheduler_api/SchedulerApiApplication.java` from the terminal.
6. Navigate to the `scheduler-web` directory.
7. create an environment file called `.env` that contains the following variables
   ```
   VITE_FIREBASE_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET
   VITE_FIREBASE_MESSAGING_SENDER_ID
   VITE_FIREBASE_APP_ID
   VITE_FIREBASE_MEASUREMENT_ID
   ```
   All of these environment variables are unique to your firebase project and should be kept private, ensure that firebase auth is activated and authentication methods activated are sign in with email and password and sign in with google account. 
9. Run `npm install`
10. Run `npm run dev`
11. A link should appear in your terminal that leads you to `http://localhost:5432/`, if it does not, navigate to that url and ensure the application is running properly


Feel free to explore this application, it is by no means finished, but it may be interesting to see my progress learning Sprint Boot! :)
