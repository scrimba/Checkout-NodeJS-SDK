'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Creates an plan.
 **/

class PlansCreateRequest {

  constructor() {
    this.path = '/v2/billing/plans?';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  prefer(prefer) {
    this.headers['Prefer'] = prefer;
    return this;
  }

  requestBody(order) {
    this.body = order;
    return this;
  }
}

module.exports = {PlansCreateRequest: PlansCreateRequest};
