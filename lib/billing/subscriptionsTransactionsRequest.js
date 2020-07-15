'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Shows transactions for a subscription, by ID.
 **/

class SubscriptionsTransactionsRequest {

  constructor(subscriptionId, startTime, endTime) {
    this.path = '/v1/billing/subscriptions/{subscription_id}/transactions?start_time={start_time}&end_time={end_time}';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.path = this.path.replace('{start_time}', querystring.escape(startTime));
    this.path = this.path.replace('{end_time}', querystring.escape(endTime));
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = {SubscriptionsTransactionsRequest: SubscriptionsTransactionsRequest};
