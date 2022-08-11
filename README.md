# OPENBOOK

<img src="/documents/presentation/glowing-title.png">

By Team 5 (Raphaella, Osman, Benjamin, Kay, Ed)

Tech stack:

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Jade](https://jade-lang.com/api) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) for AWS cloud database
- [Heroku](https://www.heroku.com/) to deploy the app.

## Diagrams

Wireframes:
<img src="/documents/wireframes/list-vs-map-wireframes.png">
<img src="/documents/wireframes/wireframe-flow.png">


## Moodboard:
<img src="/documents/mood-board/MOOD-BOARD.png">


## Result:

<img src="/documents/presentation/example-page.png">

## User stories

Using TDD, we implemented the following user stories:

As a user,  
So I can ...  
I'd like to be able to ...

## Project management

We used Trello to manage our project.

[View our card wall](https://trello.com/b/aFp8R5at/open-book)

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository
2. Rename your fork if desired to `OPENBOOK-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies
   ```
   npm install
   ```
5. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   _Note:_ If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### Start

1. Start the server
   ```
   npm start
   ```
2. Browse to [http://localhost:3000](http://localhost:3000)

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `OPENBOOK_test` MongoDB database,
so that integration tests do not interact with the development server.

### Test

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # linter only
  npm run test:unit         # unit tests only
  npm run test:integration  # integration tests only
  ```

### MongoDB Atlas and Heroku

Find instructions in the Documents directory for setting up a cloud database and deploying to Heroku.

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

- Check that MongoDB is installed using `mongo --version`
- Check that it's running using `brew services list`

## Add the two bookshops to your local database

* Run `mongosh`
* Run `use OpenBook`
* Run `db.bookshops.insertOne( { name: "Gay's the Word", address: ["66 Marchmont Street", "London", "WC1N 1AB"], website: "https://gaystheword.co.uk", openingHours: ['Monday - Saturday: 11am - 6pm', 'Sunday: 1pm - 6pm'], tags: ['LGBT', 'Queer-Owned'] } )`
* Run `db.bookshops.insertOne( { name: "Round Table Books", address: ["97 Granville Arcade", "Coldharbour Lane", "Brixton", "London", "SW9 8PS"], website: "https://www.roundtablebooks.co.uk", openingHours:['Sunday - Friday: 11am - 5:30pm', 'Saturday: 9:30am - 5:30pm'], tags: ["Children's Books", 'Black-owned Business', 'Inclusive'] } )`
