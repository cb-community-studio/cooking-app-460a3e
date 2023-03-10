const { Donations } = require('./donations.class');
const createModel = require('../../models/donations.model');
const hooks = require('./donations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/donations', new Donations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('donations');

  service.hooks(hooks);
};