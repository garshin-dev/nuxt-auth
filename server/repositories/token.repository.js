import { connection } from '../database/index.js'

class TokenRepository {
  async checkToken(userId) {
    const query = "SELECT id from tokens WHERE id_user = ?"
    const values = [userId]

    const [rows] = await connection.execute(query, values)

    return !!rows.length
  }

  async updateRefreshToken(refreshToken, userId) {
    const query = "UPDATE tokens SET refresh_token = ? WHERE id_user = ?"
    const values = [refreshToken, userId]

    const [rows] = await connection.execute(query, values)

    return !!rows.length
  }

  async addRefreshToken(refreshToken, userId) {
    const query = "INSERT INTO tokens (refresh_token, id_user) VALUES (?, ?)"
    const values = [refreshToken, userId]

    const [rows] = await connection.execute(query, values)

    return rows[0]
  }

  async deleteRefreshToken(refreshToken) {
    const query = "DELETE FROM tokens WHERE refresh_token = ?"
    const values = [refreshToken]

    const [rows] = await connection.execute(query, values)

    return rows[0]
  }
}

export default new TokenRepository()