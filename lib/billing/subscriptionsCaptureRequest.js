'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Suspends (aka. pauses) a subscription
 **/

class SubscriptionsCaptureRequest {

  constructor(subscriptionId) {
    this.path = '/v2/billing/subscriptions/{subscription_id}/capture?';
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

module.exports = {SubscriptionsCaptureRequest: SubscriptionsCaptureRequest};
