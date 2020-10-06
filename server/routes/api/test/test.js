const express = require("express");
const router = express.Router();
router.route("/")
.get((req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
    });

module.exports = router;