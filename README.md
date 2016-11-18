An open source clone of [geckoboard](https://www.geckoboard.com/). Interested in contributing? Take a look at the [project page](https://github.com/GuildCrafts/lizardboard/projects) and [issues page](https://github.com/GuildCrafts/lizardboard/issues) for outstanding issues.

## Contributing to Lizardboard

Please read the [contribution guidelines](https://github.com/GuildCrafts/lizardboard/blob/master/CONTRIBUTING.md)

## Setting up Development Environment

A mongodb database named lizardboard must be created prior to starting the application for the first time.
- brew install yarn
- brew install mongodb
- Ensure `mongo` is running
- yarn install

## HTTP API
description                                  | CRUD   | verb   | path                                     |
-------------------------------------------- | ------ | ------ | ---------------------------------------- |
Show all users                               | read   | get    | /api/v1/users                            |
Create new user                              | create | post   | /api/v1/users                            |
Show user by ID                              | read   | get    | /api/v1/users/:id                        |
Update user by ID                            | update | put    | /api/v1/users/:id                        |
Delete user by ID                            | delete | delete | /api/v1/users/:id                        |
Show all dashboards                          | read   | get    | /api/v1/dashboards                       |
Create a dashboard                           | create | post   | /api/v1/dashboards                       |
Show a dashboard by ID                       | read   | get    | /api/v1/dashboards/:id                   |
Update dashboard by ID                       | update | put    | /api/v1/dashboards/:id                   |
Delete dashboard by ID                       | delete | post   | /api/v1/dashboards/:id                   |
Create new widget and push into dashboard    | create | post   | /api/v1/dashboards/:id/widgets           |

## Technical Stack

### Back End
- [Node.js](https://nodejs.org/en/)
- [Express.js](http://expressjs.com/)
- [Passport](http://passportjs.org/docs)
- [Passport-local](https://www.npmjs.com/package/passport-local)

### Database
- [Mongodb](https://docs.mongodb.com/)
- [Mongoose](http://mongoosejs.com/docs/guide.html)

### Front End
- [React](https://facebook.github.io/react/)

### Testing
TBD
