'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Capture outstanding fees for a subscription
 **/

class SubscriptionsCaptureRequest {

  constructor(subscriptionId, note, amount, captureType='OUTSTANDING_BALANCE') {
    this.path = '/v1/billing/subscriptions/{subscription_id}/capture?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = {
      note: note,
      amount: amount,
      capture_type: captureType
    };
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = {SubscriptionsCaptureRequest: SubscriptionsCaptureRequest};
