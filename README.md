Employee Manager App
========

### Description
This is an application to maintain and managing the information of employees in a company.

### Prerequisites
- Gradle, to build and use the back-end services.
- NPM, to build and start the front-end services.
- Database of your choice. By default this application is using MySQL database.
- A working (and possibly) modern browser (tested on Firefox, Chrome and Opera).

## How-to
If you want to try to use the application, please follow these steps:
**Start the database**
1) Start the database of your choice, currently this program is using MySQL.
2) Populate the database with example data. I have prepared some data to be used as an example. Filename: Dummy_Data_Query.sql
3) Start the database after everything has been set up.

**Build the back-end services**
1) Install Gradle
2) Go to backend folder and build the back-end services first with `gradle build` command on your console.
3) Start Spring Boot with `gradle bootRun` command on your console.
4) The default server port is `8090`

**Build the front-end services**
1) Install NPM
2) Go to frontend folder and build the front-end services first with `npm install` command on your console.
3) Start Angular with `npm start` command on your console.
4) Angular will be opened automatically on your default browser or you can access it manually on `http://localhost:3000`

Sample images for each employees can be obtained in `imageplaceholder` folder.