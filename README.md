# 🐉 DragonBoard-Backend 🐲

An open source clone of [geckoboard](https://www.geckoboard.com/). Interested in contributing? Take a look at the [project page](https://github.com/GuildCrafts/lizardboard/projects) and [issues page](https://github.com/GuildCrafts/lizardboard/issues) for outstanding issues.

## Contributing to DragonBoard

Please read the [contribution guidelines](https://github.com/GuildCrafts/lizardboard/blob/master/CONTRIBUTING.md)

## Set up Development Environment with Homebrew
```
$ brew update
```

### Install Yarn 🐈
```
$ brew install yarn
```
### Install Mongo
```
$ brew install mongodb
$ brew services start mongodb
```

###### Create db directory
```
$ sudo mkdir -p /data/db
```
###### Set permissions for /data/db
```
$ sudo chown -R `id -un` /data/db
```
###### Run mongo daemon 😈
```
$ mongod
```
###### In another terminal window, create the db
```
$ mongo
$ use lizardboard
```
###### Create a .env file in the root of the cloned repo and add
```
MONGODB_URI=mongodb://localhost/lizardboard
SECRET='Put Your Secret Here'
FRONTEND_SERVER='http://localhost:3000'
```
###### Install all the things
```
$ yarn
```
###### Start the server! 🎉 🎉 🎉 !!!
```
$ yarn start
```
###### Seed the database
```
$ yarn seed
```
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
- [Mocha](https://mochajs.org/)
