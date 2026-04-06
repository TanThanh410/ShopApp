import express from 'express'
const router = express.Router();
import * as ProductController from './controllers/ProductController.js'
import * as CategoryController from './controllers/CategoryController.js'
import * as BrandController from './controllers/BrandController.js'
import * as OrderController from './controllers/OrderController.js'
import * as OrderDetailController from './controllers/OrderDetailController.js'


export function AppRoute(app){
    //Product Router
    router.get('/products', ProductController.getProducts)
    router.get('/products/:id', ProductController.getProductById)
    router.post('/products', ProductController.insertProducts)
    router.put('/products/:id', ProductController.updateProducts)
    router.delete('/products/:id', ProductController.deleteProducts)

    //Category Router
    router.get('/categories', CategoryController.getCategory)
    router.get('/categories/:id', CategoryController.getCategoryById)
    router.post('/categories', CategoryController.insertCategory)
    router.put('/categories/:id', CategoryController.updateCategory)
    router.delete('/categories/:id', CategoryController.deleteCategory)

    //Brand Router
    router.get('/brands', BrandController.getBrands)
    router.get('/brands/:id', BrandController.getBrandById)
    router.post('/brands', BrandController.insertBrands)
    router.put('/brands/:id', BrandController.updateBrands)
    router.delete('/brands/:id', BrandController.deleteBrands)

    //Order Router
    router.get('/orders', OrderController.getOrders)
    router.get('/orders/:id', OrderController.getOrderById)
    router.post('/orders', OrderController.insertOrders)
    router.put('/orders/:id', OrderController.updateOrders)
    router.delete('/orders/:id', OrderController.deleteOrders)

    //OrderDetail Router
    router.get('/order-details', OrderDetailController.getOrderDetails)
    router.get('/order-details/:id', OrderDetailController.getOrderDetailById)
    router.post('/order-details', OrderDetailController.insertOrderDetails)
    router.put('/order-details/:id', OrderDetailController.updateOrderDetails)
    router.delete('/order-details/:id', OrderDetailController.deleteOrderDetails)
    app.use('/api/', router)
}

