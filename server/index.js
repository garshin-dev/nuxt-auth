import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './router/index.js'
import errorsMiddleware from './middleware/errors.middleware.js'

const app = express()

const PORT = 5000

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
app.use(errorsMiddleware)

const start = async () => {
  try {
    app.listen(PORT, () => console.log('The server is running on PORT: ' + PORT))
  } catch(e) {
    console.error(e)
  }
}

await start()