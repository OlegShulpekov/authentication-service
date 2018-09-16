const mongoose = require('mongoose');
const config = require('./config');

module.exports = (mongoose, config) => {
  const database = mongoose.connection;

  mongoose.Promise = Promise;
  mongoose.connect(config.database, {
    useNewUrlParser: true,
    promiseLibrary: global.Promise
  });

  database.on('error', error => console.log(`ERROR: Connection to MongoDB failed: ${error}`));
  database.on('connected', () => console.log('SUCCESS: Connected to MongoDB'));
  database.on('disconnected', () => console.log('Disconnected from MongoDB'));

  process.on('SIGINT', () => {
    database.close(() => {
      console.log('Application terminated, connection closed');
      process.exit(0);
    })
  });
};
