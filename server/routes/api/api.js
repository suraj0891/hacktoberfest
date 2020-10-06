const express = require("express");
const path = require("path");
const test = require("../api/test/test");
const login=require("../api/login")
const register=require("../api/register")
const logout=require("../api/logout")
const admin=require("../api/admin")
const router = express.Router();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "../../home.html");

router.use("/test", test);
router.use("/login", login);
router.use("/logout",logout)
router.use("/register",register);
router.use("/admin",admin)

router.get("*", (_, res) => res.sendFile(HTML_FILE));

module.exports = router;