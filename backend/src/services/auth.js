const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const authorizationHeader = req.get("Authorization");
        if  (authorizationHeader == null) {
            throw new Error("Invalid authorization header");
        }
        const [type, token] = authorizationHeader.split(" ");

        if(type!== "Bearer") {
            throw new Error("Authorization header incorrect")
        }
        req.auth = jwt.verify(token, process.env.APP_SECRET);
        next();
    } catch (err) {
        console.error(err);
        res.sendStatus(401);
    }
};

module.exports = verifyToken