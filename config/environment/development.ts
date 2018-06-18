'use strict'

// Development specific configuration
// ==================================
export default {
  allowedOrigins: [
    'http://localhost:3000',
  ],
  mongo: {
    // uri: 'mongodb://mongo/typeExpress-dev'
    uri: 'mongodb://testuser:testuser1@ds161710.mlab.com:61710/stock-market-broker'
  },
};
