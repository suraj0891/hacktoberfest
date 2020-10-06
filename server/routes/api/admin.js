const express = require("express");
const router = express.Router();
router.route("/").get((req,res)=>{
    if (req.user) {
        let response = {
            data:"" ,
            error: "",
            redirect: "",
            status:200
          }
          response.data = {
            "name": req.user.name,
            "email": req.user.email,
            "username": req.user.username
          }
          res.send(response);
      }
      else{
      let response = {
        data: "",
        error: "",
        redirect: "/login",
        status:200
      }
      res.send(response);
    }
})
module.exports=router;