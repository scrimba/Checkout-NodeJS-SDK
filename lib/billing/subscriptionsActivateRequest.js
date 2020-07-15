'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Activate (aka. un-pause / resume) a subscription
 **/

class SubscriptionsActivateRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/{subscription_id}/activate?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  requestBody(SuspendReason) {
    this.body = SuspendReason;
    return this;
  }
}

module.exports = {SubscriptionsActivateRequest: SubscriptionsActivateRequest};
