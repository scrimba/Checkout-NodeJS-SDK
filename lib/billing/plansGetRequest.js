'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Shows details for an order, by ID.
 **/

class PlansGetRequest {

  constructor(orderId) {
    this.path = '/v2/billing/plans/{plan_id}?';
    this.path = this.path.replace('{plan_id}', querystring.escape(planId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = {PlansGetRequest: PlansGetRequest};
