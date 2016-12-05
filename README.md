# Lizardboard Team Name: #Shaggy-Sheathbill

An open source clone of [geckoboard](https://www.geckoboard.com/). Interested in contributing? Take a look at the [project page](https://github.com/GuildCrafts/lizardboard/projects) and [issues page](https://github.com/GuildCrafts/lizardboard/issues) for outstanding issues.

## Contributing to Lizardboard

Please read the [contribution guidelines](https://github.com/GuildCrafts/lizardboard/blob/master/CONTRIBUTING.md)

## Setting up Development Environment

A mongodb database named lizardboard must be created prior to starting the application for the first time.
- brew install yarn
- brew install mongodb
- Ensure `mongo` is running
- yarn install

### Specs
- [x] Setup Api for getting json responses of various dashboard queries following: 
 - [x] GET /dashboards - get all dashboards
 - [x] POST /dashboards { data } - create a new dashboard entry
 - [x] GET /dashboards/:id - get single dashboard entry
 - [x] PUT /dashboards/:id { data } - update single dashboard entry
 - [x] DELETE /dashboards/:id - delete single dashboard entry
 - [x] GET /dashboards/:id/widgets - get all widgets for single dashboard entry
 - [x] POST /dashboards/:id/widgets - create widgets for single dashboard entry
- [x] [Create New Dashboard #23](https://github.com/GuildCrafts/lizardboard/issues/23)
- [x] [Delete Dashboard #25](https://github.com/GuildCrafts/lizardboard/issues/25)

## Technical Stack

### Back End
- [Node.js](https://nodejs.org/en/)
- [Express.js](http://expressjs.com/)
- [Passport](http://passportjs.org/docs)
- [Passport-local](https://www.npmjs.com/package/passport-local)

### Database
- [Mongodb](https://docs.mongodb.com/)
- [Mongoose](http://mongoosejs.com/docs/guide.html)
- [Migrate-Mongoose](https://github.com/balmasi/migrate-mongoose)

## Front End
- [React](https://facebook.github.io/react/)

## Testing
TBD
