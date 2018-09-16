module.exports = {

  mongodb: {
    port: process.env.MONGODB_PORT || 27017,
    host: process.env.MONGODB_HOST || 'localhost'
  },

  database: 'mongodb://127.0.0.1/authentication-service-db',

};
