import { connection } from '../database/index.js'

class UserRepository {
  async checkUser(login) {
    const query = "SELECT id, password_hash FROM users WHERE login = ?"
    const values = [login]

    const [rows] = await connection.execute(query, values)

    return {
      exists: !!rows.length,
      id: rows[0]?.id,
      password_hash: rows[0]?.password_hash
    }
  }

  async createUser(login, hashPassword, name) {
    const query = "INSERT INTO users (login, password_hash, name) VALUES (?, ?, ?)"
    const values = [login, hashPassword, name]

    const [rows] = await connection.execute(query, values)

    return rows.insertId
  }

  async getUser(login) {
    const query = "SELECT id FROM users WHERE login = ?"
    const values = [login]

    const [rows] = await connection.execute(query, values)

    return rows[0]
  }
}

export default new UserRepository()