const users = require("./users/users.service.js");
const cookings = require("./cookings/cookings.service.js");
const donations = require("./donations/donations.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(cookings);
  app.configure(donations);
  // ~cb-add-configure-service-name~
};
