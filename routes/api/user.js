const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User  Model
const User = require("../../models/User");

//@route Get api/users
// Register new user
router.get("/", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  //validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields." });
  }
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists." });

    const newUser = new User({
      firstName,
      lastName,
      email,
      password
    });

    //Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          //Create jwt
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
                token: token,
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
  });
});

module.exports = router;
