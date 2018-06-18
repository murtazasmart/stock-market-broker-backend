// Production specific configuration
// =================================
export default {
  allowedOrigins: [
    'https://your-site.com',
  ],

  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

  // Server port
  port: 8080,
  mongo: {
    uri: 'mongodb://testuser:testuser1@ds161710.mlab.com:61710/stock-market-broker'
  },
};
