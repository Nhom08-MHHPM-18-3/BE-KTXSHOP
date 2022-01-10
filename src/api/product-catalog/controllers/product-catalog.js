'use strict';

/**
 *  product-catalog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product-catalog.product-catalog');
