## Description
The front-end was made from scratch using Angular (ver. 4.0.2) quickstart package and on the back-end side, the Spring Boot.

### Note
Please install Gradle to build and use the back-end service.
The back-end service configuration is currently set to use MySQL ver 5.x database.
The current port used by the angular is 3000, and the one used by spring boot is 8090

## How-to
If you want to try to use the application, please follow these steps:
1) Start the database of your choice, currently this program is using MySQL.
2) Edit the content of application.properties in the backend folder to match your database settings of your choice.
3) I have prepared some data to be used as an example. Filename: Dummy_Data_Query.sql
4) Start the backend service using Gradle with "gradle bootRun" command on your console.
5) Start the frontend service using NPM with "npm start" command on your console.
