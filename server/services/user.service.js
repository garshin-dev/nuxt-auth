import userRepository from '../repositories/user.repository.js'
import bcrypt from 'bcrypt'
import tokenService from './token.service.js'

class UserService {
  async registration(login, password, name) {
    const user = await userRepository.checkUser(login)

    if (!user.exists) {
      const hashPassword = await bcrypt.hash(password, 4)
      const userId = await userRepository.createUser(login, hashPassword, name)
      const tokens = await tokenService.generateTokens({ login })
      await tokenService.saveToken(tokens.refreshToken, userId)

      return {
        ...tokens,
        userId
      }
    }

    throw new Error("User already exists")
  }

  async login(login, password) {
    const user = await userRepository.checkUser(login)

    if (user.exists) {
      const passwordsEqual = await bcrypt.compare(password, user.password_hash)

      if (passwordsEqual) {
        const tokens = await tokenService.generateTokens({ login })
        await tokenService.saveToken(tokens.refreshToken, user.id)

        return {
          ...tokens,
          userId: user.id
        }
      }

      throw new Error("Invalid password")
    }

    throw new Error("User is not found")
  }

  async logout(refreshToken) {
    return await tokenService.deleteToken(refreshToken)
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw new Error("Unauthorized user")
    }

    const userData = await tokenService.validateRefreshToken(refreshToken)
    const isTokenExists = await tokenService.checkToken(refreshToken)

    if (!userData || !isTokenExists) {
      throw new Error("Unauthorized user")
    }

    const user = await userRepository.getUser(userData.login)
    const tokens = await tokenService.generateTokens({ login: user.login })
    await tokenService.saveToken(tokens.refreshToken, user.id)

    return {
      ...tokens,
      userId: user.id
    }
  }
}

export default new UserService()