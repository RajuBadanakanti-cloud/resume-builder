


const validation = (schema, param="body") => {
    return (req, res, next) => {
        const {error, value} = schema.validate(req[param], {abortEarly:true, skipFunctions:false})
        if(error){
            return res.status(400).json({
                status:"validation Failed!",
                message:error.details.map(each => each.message.replace(/"/g, ""))
            })
        }
        req[param] = value
        next()
    }
}

export default validation