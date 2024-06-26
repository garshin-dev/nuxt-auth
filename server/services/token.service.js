import jwt from 'jsonwebtoken'
import tokenRepository from '../repositories/token.repository.js'

class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, 'ACCESS_SECRET_KEY', { expiresIn: '15m' })
    const refreshToken = jwt.sign(payload, 'REFRESH_SECRET_KEY', { expiresIn: '30d' })

    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(refreshToken, userId) {
    const isTokenExists = await tokenRepository.checkToken(userId)

    if (isTokenExists) {
      return await tokenRepository.updateRefreshToken(refreshToken, userId)
    }

    return await tokenRepository.addRefreshToken(refreshToken, userId)
  }

  async deleteToken(refreshToken) {
    return await tokenRepository.deleteRefreshToken(refreshToken)
  }

  validateAccessToken(accessToken) {
    try {
      return jwt.verify(accessToken, "ACCESS_SECRET_KEY")
    } catch (e) {
      return null
    }
  }

  validateRefreshToken(refreshToken) {
    try {
      return jwt.verify(refreshToken, "REFRESH_SECRET_KEY")
    } catch (e) {
      return null
    }
  }

  async checkToken(refreshToken) {
    return await tokenRepository.checkToken(refreshToken)
  }
}

export default new TokenService();