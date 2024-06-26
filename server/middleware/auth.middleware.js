import tokenService from '../services/token.service.js'

export default function(req, res, next) {
  try {

    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader) {
      next({
        message: 'Unauthorized user'
      })
    }

    const accessToken = authorizationHeader.split(' ')[1]

    if (!accessToken) {
      next({
        message: 'Unauthorized user'
      })
    }

    const data = tokenService.validateAccessToken(accessToken)

    console.log('oiiiiiiiiii data', data)

    if (!data) {
      next({
        message: 'Unauthorized user'
      })
    }

    req.user = data;
    next();
  } catch (e) {
    next({
      message: 'Unauthorized user'
    })
  }
}