const express = require("express");
const path = require("path");
const login=require("../api/login")
const register=require("../api/register")
const logout=require("../api/logout")
const admin=require("../api/admin")
const router = express.Router();
const DIST_DIR = __dirname;

router.use("/login", login);
router.use("/logout",logout)
router.use("/register",register);
router.use("/admin",admin)

router.get("*", (_, res) => res.sendFile(HTML_FILE));

module.exports = router;