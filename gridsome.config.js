const { displayName, description } = require('./package.json');

module.exports = {
  port: 3000,

  siteName: displayName,
  siteDescription: description
};
