const assert = require('assert');
const app = require('../../src/app');

describe('\'cookings\' service', () => {
  it('registered the service', () => {
    const service = app.service('cookings');

    assert.ok(service, 'Registered the service (cookings)');
  });
});
