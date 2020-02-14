module.exports = (err, req, res, next) => {
    if (err.name === "SequelizeValidationError") {
        console.log("MASSSUUUKKKKKKK SINI GENGGSSS")
        let createMsg = {
            msg: []
        }
        err.errors.forEach(el => {
            createMsg.msg.push(el.message)
        });
        console.log(createMsg.msg[0], "++++++++++++++++++++++")
        res.status(400).json({
            msg: createMsg.msg[0]
        })
    } else {
        console.log(err.msg, "+++++++++++++++++++++++++++++++++++++++++++++")
        res.status(err.status || 500).json({
            msg: err.msg || "Invalid Server Error"
        })
    }
}