# todo-app-backend
## About
  - This API is part of a course about react (https://www.udemy.com/course/react-redux-pt/learn/lecture/6513154#overview).
  - It's a simple Node.js API that will be used to a todo app.
  - This API uses: express, mongoose, node-restful, body-parser, nodemon, and pm2.

## Seting up the project

### Yarn
 ```
  $ brew install yarn
 ```

### Installing the node dependencies:
  ```
    $ yarn 
  ```
### Install MongoDB:
  ```
    $ brew install mongodb-community@4.4
  ```

### Starting MongoDB:
  ```
   $ brew services start mongodb-community@4.4
  ```

## Running the API

### Development environment:
  ```
    $ yarn run dev
  ```
### Production environment:
  ```
    $ yarn run production
  ```

  > Remember that you need to start the MongoDB manually