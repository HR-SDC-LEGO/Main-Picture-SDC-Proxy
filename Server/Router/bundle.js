const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1,
} = require('../config/index.js');

const router = Router();

router.use('/service1.js', createProxyMiddleware({
  target: service1.url,
  pathRewrite: {
    '^/bundle/service1.js': service1.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;