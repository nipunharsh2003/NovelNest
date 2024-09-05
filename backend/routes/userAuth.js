const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    //token is barrer token so we write it after a space like barrier token

    if (token == null) {
        return res.status(401).json({ massage: "authentication token required" });
    }
    jwt.verify(token, "bookStore123", (err, user) => {
        if (err) {
            return res.status(403)
                .json({ massage: "token is expireed please signin" });
        }
        req.user = user;
        next();
    });
};
module.exports = { authenticateToken };
