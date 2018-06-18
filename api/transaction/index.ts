import * as controller from './transaction.controller'
import { Router } from 'express'

const router = Router()

router.post('/', controller.transaction)
router.get('/history', controller.getHistory)
router.get('/portfolio/:name', controller.portfolio)

export default router
