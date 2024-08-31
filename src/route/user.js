const route = require('express').Router();
const { user: controller } = require('../core/controller');
const { user: middleware } = require('../core/middleware');

route.get('/one', [middleware.midd1], controller.users);
route.get('/all', [middleware.midd1, middleware.midd2], controller.users);

module.exports = route;
