import mysql from 'mysql2/promise'

const createConnectionPool = () => {
  return mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nuxt_auth_db',
  })
}

export const connection = createConnectionPool()