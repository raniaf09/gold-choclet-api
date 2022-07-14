const jwt = require("jsonwebtoken")

const isAuthorized = (req, res, next) => {

    try {
        let token = req.get("Authorization")
        let decodedToken = jwt.verify(token, "SECRET")
        //
        console.log(decodedToken);
        next()
    } catch (error) {
        res.status(400).send({ message: "Error fetching users !", error: error })
    }
}

module.exports = { isAuthorized }