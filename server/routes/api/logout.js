const express = require("express");
const router = express.Router();
router.route("/").get((req,res)=>{
    if (req.session) {
        req.session.destroy();
      }
      let response = {
        data: "",
        error: "",
        redirect: "/login",
        status:200
      }
      res.send(response);
})
module.exports=router;