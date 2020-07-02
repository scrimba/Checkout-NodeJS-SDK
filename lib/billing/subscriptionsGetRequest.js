'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Shows details for a subscription, by ID.
 **/

class SubscriptionsGetRequest {

  constructor(subscriptionId) {
    this.path = '/v2/billing/subscriptions/{subscription_id}?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = {SubscriptionsGetRequest: SubscriptionsGetRequest};
