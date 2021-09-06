import {Router} from 'express'
const router = Router()

import * as productCtrl from '../controllers/products.controller'
import { authJwl } from '../middlewares'

router.post('/', [authJwl.verifyToken, authJwl.isModerator], productCtrl.createProducts)
router.get('/', productCtrl.getProducts)
router.get('/:productId', productCtrl.getProductById)
router.put('/:productId', [authJwl.verifyToken, authJwl.isAdmin], productCtrl.updateProductById)
router.delete('/:productId', [authJwl.verifyToken, authJwl.isAdmin], productCtrl.deleteProductById)

export default router;