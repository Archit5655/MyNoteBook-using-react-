const express = require("express");
const router = express.Router();
const User = require("../modules/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
 const fetchuser= require('../middleware/fetchuser')
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Archit bhai ram ram";
// create a user using: POST "/appi/auth/"
// route 1
router.post(
  "/createuser",
  [
    body("email", "Ente ra valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body(
      "password",
      "Atleast 5 char of leanth of apssword is required"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //  checking if the user with this email exist or not
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry thre user already exist with already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtdata = jwt.sign(data, JWT_SECRET);
      // .then(user => res.json(user)).catch(err=>console.log(err).res.json({error: 'please enter a unique value for email'}))

      // req.send(req.body);
      console.log(jwtdata);
      // res.json(user);
      res.json({ jwtdata });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured ");
    }
  }
);

//  authentication of theh user
//  route 2

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password can not be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "try to login with correct credintials  " });
      }
      const passcompare = await bcrypt.compare(password, user.password);
      if (!passcompare) {
        return res
          .status(400)
          .json({ error: "try to login with correct credintials  " });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtdata = jwt.sign(data, JWT_SECRET);
      res.json({ jwtdata });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(" internal server  error occured ");
    }
  }
);

//  route 3 get user details
router.post('/getuser',fetchuser,
  async (req, res) => {
    try {
      userId = req.user.id;

      const user = await User.findById(userId).select("password");
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send(" internal server  error occured ");
    }
  }
);
module.exports = router;
