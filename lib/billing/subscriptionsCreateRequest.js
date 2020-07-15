'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Create a subscription
 **/

class SubscriptionsCreateRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/?';
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

  requestBody(SuspendReason) {
    this.body = SuspendReason;
    return this;
  }
}

module.exports = {SubscriptionsCreateRequest: SubscriptionsCreateRequest};
