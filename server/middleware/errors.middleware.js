export default function(error, req, res, next) {
  if (error.status) {
    res.status(error.status).json({
      errorMessage: error.message
    })
  }

  res.json({
    errorMessage: error.message
  })
}