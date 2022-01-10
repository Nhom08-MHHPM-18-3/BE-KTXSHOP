'use strict';

/**
 * product-catalog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-catalog.product-catalog');
