import * as controller from './transaction.controller'
import { Router } from 'express'

const router = Router()

router.post('/', controller.transaction)
router.get('/history/:gameId', controller.getHistory)
router.get('/portfolio/:name', controller.portfolio)
router.get('/value/portfolio/:name', controller.portfolioValue)
router.get('/delete/all', controller.deleteAll)

export default router
