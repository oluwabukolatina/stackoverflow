# be-bukola-ajishebiyawo
## Senior Backend Engineer Technical Test
This exercise is designed to test your knowledge of RESTful API
design, database design, documentation (OpenAPI or Postman), design
patterns and problem solving skills.
## Functional Requirements
The task is to implement a simple clone of Stackoverflow. To limit
scope, there are 3 modules to be implemented:
1. Authentication
2. Questions (asking and replying)
3. Rating (upvoting/downvoting)
## Instructions
Try to complete as much as possible within the given time frame. If
you need more time please ask for an extension. You must complete
full functionality of the application with industry-level coding
style/commenting. Unfinished assignments will not be considered.
Please note that you are expected to work on the exercise
independently. Discussing assignments details with colleagues or any
indication of outside help will be considered cheating.
Please do not expect too much hand-holding as this is an evaluation
assignment.
Read the complete assessment before you start. Understand clearly
what is required so that your work will be appropriate and easier.
## Getting Started
>  [Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Author](#author)
---
### Heroku App
- Application was deployed to Heroku. Use public URL https://be-bukola-korapay.herokuapp.com with API endpoints.
### Postman
-API Documentation was generated with [postman](https://documenter.getpostman.com/view/4223397/TWDditWC).
#### Setup
- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:${PORT}` as base url for endpoints

## Technologies Used
- [Node.js](https://nodejs.org) A run time environment based off Chrome's v8 Engines for writing Javascript server-side applications.
- [Express.js](https://expressjs.com) - Web application framework based on Node.js.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a programming language developed and maintained by Microsoft.
- [MySQL](https://www.mysql.com/) - MySQL is an open-source relational database management system.
- [Sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
### Testing Tools
- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
### Installations
#### Getting started
- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.
#### Clone 
- Clone to your local machine https://gitlab.com/korapay-engineering/be-bukola-ajishebiyawo.git
#### Setup
- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Update env
  > Run the command below to create the file if on macos otherwise create the file manually
  ```shell
  $ touch .env
  ```

- migrations
  > Run the command below
  ```shell
  $ sequelize db:migrate
  ```
- seed (optional)
  > Run the command below
  ```shell
  $ sequelize db:seed:all
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:${PORT}/api/v1/korapay` as base url for endpoints
### API Endpoints
| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| POST    | register a user               | `/auth/register`           |
| POST   | Login a user                       | `/auth/login`           |
| POST   |Ask a question                       | `/question`           |
| GET   | Get all questions                      | `/question`           |
| PUT   | Upvote question                      | `/question/upvote/:id`   |
| PUT   | Downvote question                      | `/question/downvote/:id`   |
| POST   | Answer question                      | `/answer/:questionId`   |
| PUT   | Upvote answer                      | `/answer/upvote/:answerId`   |
| PUT   | Downvote question                      | `/answer/downvote/:answerId`   |
| POST   | subscribe to question                      | `/subscribe/question/:questionId`   |
### Testing
- Run tests for all
  > run the command below
  ```shell
  $ npm run test
  ```
## Author
- [Tina](https://github.com/oluwabukolatina)
