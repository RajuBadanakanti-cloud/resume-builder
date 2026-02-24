
const globalErrorMid = (err, req, res, next) => {
    console.log(err)
    res.status(err.statusCode || 500 ).json({
        status:"fail",
        message:err.message,
    })
}

export default globalErrorMid