const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//User  Model
const User = require("../../models/User");

//@route Get api/auth
// Authenticate user
router.get("/", (req, res) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields." });
  }
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exists." });

    //Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid login" });
      jwt.sign(
        //Payload could be anything. When we send a token from react, the user id is in there so that it knows which user it is
        { id: user.id },
        //get the jwtSecret value
        config.get("jwtSecret"),
        //if you want to token to expire : this expires in 1 hr
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            }
          });
        }
      );
    });
  });
});

//Get api/auth/user
//Get user data
router.get(
  "/user",
  auth,
  (req,
  res => {
    User.findById(req.user.id)
      .select("-password")
      .then(user => res.json(user));
  })
);
module.exports = router;
