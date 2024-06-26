import Router from 'express'
import userController from '../controllers/user.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)
router.get('/posts', userController.getPosts)
router.get('/users', authMiddleware, userController.getUsers)

export default router