'use strict';

/**
 * mode-of-payment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mode-of-payment.mode-of-payment');
