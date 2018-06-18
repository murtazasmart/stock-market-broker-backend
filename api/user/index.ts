import * as controller from './user.controller'
import { Router } from 'express'

const router = Router()

router.post('/', controller.addUser)
router.get('/all', controller.getUsers)

export default router
