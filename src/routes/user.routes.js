import {Router} from 'express'
const router = Router()

import * as userCtrl from '../controllers/user.controller'
import {authJwl,verifySignup} from '../middlewares'

router.post('/',[
    authJwl.verifyToken,
    authJwl.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.createUser)

export default router;