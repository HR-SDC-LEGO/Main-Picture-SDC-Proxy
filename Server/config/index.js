module.exports = {
  service1: {
    api: '/lego/products',
    url: 'http://50.18.208.198:3053',
    bundle: 'bundle.js',
  },
  service2: {
    api: '/productDescription/itemAndUser',
    url: 'http://localhost:3034',
    bundle: 'bundle.js',
  },
  service3: {
    api: '/products/:id',
    url: 'http://localhost:3003',
    bundle: 'bundle.js',
  },
  service4: {
    api: '/reviews',
    url: 'http://localhost:3003',
    bundle: 'bundle.js'
  }
};