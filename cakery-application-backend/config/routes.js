const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/UserCtrl')
const productController = require('../app/controllers/ProductCtrl')
const orderController = require('../app/controllers/OrderCtrl')
const contactController = require('../app/controllers/ContactCtrl')

//user
router.post('/api/user/register', userController.register)
router.post('/api/user/login', userController.login)

// product
router.get('/api/products', productController.list)
router.post('/api/products', productController.create)
router.put('/api/products/:id', productController.update)
router.delete('/api/products/:id', productController.destroy)

//order
router.get('/api/orders', orderController.list)
router.post('/api/orders', orderController.create)
router.put('/api/orders/:id', orderController.update)

//contact
router.get('/api/contact', contactController.list)
router.post('/api/contact', contactController.create)

module.exports = router