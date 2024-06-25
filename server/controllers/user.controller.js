import UserService from '../services/user.service.js'
import userService from '../services/user.service.js'

class UserController {
  async registration(req, res, next) {
    try {
      const { login, password, name } = req.body
      const data = await UserService.registration(login, password, name)

      res.cookie('refreshToken', data.refreshToken, { maxAge: 30 * 24 * 60 * 60, httpOnly: true })
      res.json(data)
    } catch(e) {
      next(e)
    }
  }

  async login(req, res, next) {
    try {
      const { login, password } = req.body
      const data = await userService.login(login, password)

      res.cookie('refreshToken', data.refreshToken, { maxAge: 30 * 24 * 60 * 60, httpOnly: true })
      res.json(data)
    } catch(e) {
      next(e)
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const token = await userService.logout(refreshToken)
      res.clearCookie('refreshToken')
      return res.json(token)
    } catch(e) {
      console.error(e)
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const data = await userService.refresh(refreshToken)

      res.cookie('refreshToken', data.refreshToken, { maxAge: 30 * 24 * 60 * 60, httpOnly: true })
      res.json(data)
    } catch(e) {
      console.error(e)
    }
  }

  async getPosts(req, res, next) {
    try {
      res.json(['some', '23322423'])
    } catch(e) {
      console.error(e)
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json(['user1', 'user2'])
    } catch(e) {
      console.error(e)
    }
  }
}

export default new UserController()