'use strict';

/**
 * info-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::info-blog.info-blog');
