const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
const authenticate = require('../middleware/is-auth');

// /admin/add-product => GET
router.get('/add-product', authenticate, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', authenticate, adminController.postAddProduct);

router.get(
  '/edit-product/:productId',
  authenticate,
  adminController.getEditProduct
);

router.post('/edit-product', authenticate, adminController.postEditProduct);

router.post('/delete-product', authenticate, adminController.postDeleteProduct);

module.exports = router;
