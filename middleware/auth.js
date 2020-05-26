const jwt = require("jsonwebtoken");
const config = require("config");

//Middleware function
function auth(req, res, next) {
  const token = req.header("x-auth-token");
  //Check for token
  if (!token) {
    res.status(401).json({ msg: "No token, unauthorized" }); //unauthorized permissions
    try {
      //Verify token
      const decoded = jwt.verify(token, config.get("jwtSecret"));
      //Take user from token; add user from payload
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: "Invalid token." });
    }
  }
}
module.exports = auth;
