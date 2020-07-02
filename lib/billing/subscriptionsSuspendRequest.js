'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Suspends (aka. pauses) a subscription
 **/

class SubscriptionSuspendRequest {

  constructor(subscriptionId) {
    this.path = '/v2/billing/subscriptions/{subscription_id}/suspend?';
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

module.exports = {SubscriptionSuspendRequest: SubscriptionSuspendRequest};
