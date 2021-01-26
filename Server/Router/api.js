const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1,
} = require('../config/index.js');

const router = Router();

router.use(service1.api, createProxyMiddleware({ target: service1.url, changeOrigin: true }));
// router.use(service2.api, createProxyMiddleware({ target: service2.url, changeOrigin: true }));
// router.use(service3.api, createProxyMiddleware({ target: service3.url, changeOrigin: true }));

module.exports = router;