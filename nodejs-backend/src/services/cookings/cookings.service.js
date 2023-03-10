const { Cookings } = require('./cookings.class');
const createModel = require('../../models/cookings.model');
const hooks = require('./cookings.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cookings', new Cookings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cookings');

  service.hooks(hooks);
};