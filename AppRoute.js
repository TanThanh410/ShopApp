const express = require('express')
const router = express.Router()

const ProductController = require('./controllers/ProductController')
const CategoryController = require('./controllers/CategoryController')
const BrandController = require('./controllers/BrandController')
const OrderController = require('./controllers/OrderController')
const OrderDetailController = require('./controllers/OrderDetailController')

function AppRoute(app) {
  // Product
  router.get('/products', ProductController.getProducts)
  router.get('/products/:id', ProductController.getProductById)
  router.post('/products', ProductController.insertProducts)
  router.put('/products/:id', ProductController.updateProducts)
  router.delete('/products/:id', ProductController.deleteProducts)

  // Category
  router.get('/categories', CategoryController.getCategory)
  router.get('/categories/:id', CategoryController.getCategoryById)
  router.post('/categories', CategoryController.insertCategory)
  router.put('/categories/:id', CategoryController.updateCategory)
  router.delete('/categories/:id', CategoryController.deleteCategory)

  // Brand
  router.get('/brands', BrandController.getBrands)
  router.get('/brands/:id', BrandController.getBrandById)
  router.post('/brands', BrandController.insertBrands)
  router.put('/brands/:id', BrandController.updateBrands)
  router.delete('/brands/:id', BrandController.deleteBrands)

  // Order
  router.get('/orders', OrderController.getOrders)
  router.get('/orders/:id', OrderController.getOrderById)
  router.post('/orders', OrderController.insertOrders)
  router.put('/orders/:id', OrderController.updateOrders)
  router.delete('/orders/:id', OrderController.deleteOrders)

  // Order Detail
  router.get('/order-details', OrderDetailController.getOrderDetails)
  router.get('/order-details/:id', OrderDetailController.getOrderDetailById)
  router.post('/order-details', OrderDetailController.insertOrderDetails)
  router.put('/order-details/:id', OrderDetailController.updateOrderDetails)
  router.delete('/order-details/:id', OrderDetailController.deleteOrderDetails)

  app.use('/api', router)
}

module.exports = { AppRoute }