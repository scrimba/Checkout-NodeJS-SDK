'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Shows details for an order, by ID.
 **/

class PlansListRequest {

  constructor(orderId) {
    this.path = '/v2/billing/plans/';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = {PlansGListequest: PlansListRequest};
