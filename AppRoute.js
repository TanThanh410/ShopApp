import express from 'express'
const router = express.Router();
import * as ProductController from './controllers/ProductController.js'

export function AppRoute(app){
    //http:localhost:3000/products
    router.get('/products', ProductController.getProducts)
    router.get('/products/:id', ProductController.getProductById)
    router.post('/products', ProductController.insertProducts)
    router.put('/products', ProductController.updateProducts)
    router.delete('/products/:id', ProductController.deleteProducts)

    app.use('/api/', router)
}

