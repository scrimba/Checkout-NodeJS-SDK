'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Cancels a subscription
 **/

class SubscriptionsCancelRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/{subscription_id}/suspe?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  requestBody(cancelReason) {
    this.body = cancelReason;
    return this;
  }
}

module.exports = {SubscriptionsCancelRequest: SubscriptionsCancelRequest};
