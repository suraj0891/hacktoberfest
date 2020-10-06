const express = require("express");
var passport = require('passport');
var utils = require('../../utils')
var User = require('../../model/user');
const router = express.Router();
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
router.get("/", (req, res) => {
  if (req.user) {
    let response = {
      data: "",
      error: "",
      redirect: "/admin",
      status:200
    }
    res.send(
      response
    )
  } else {
    let response = {
      data: "",
      error: "",
      redirect: "",
      status:200
    }
    res.send(response);
  }
})
router.post('/', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      let response = {
        data: "",
        error: "Invalid Credentials",
        redirect: "",
        status:401
      }
      return res.send(response)
    }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      let response = {
        data: "",
        error: "",
        redirect: "",
        status:200
      }
      response.data = {
        "name": user.name,
        "email": user.email,
        "username": user.username
      }
      response.redirect = "/admin"
      return res.send(response);
    });
  })(req, res, next);
});
module.exports = router;