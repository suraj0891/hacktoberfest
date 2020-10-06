var express = require('express');
var router = express.Router();

var User = require('../../model/user');
var utils=require('../../utils.js')
// POST : http://name/router/
var response=utils.resObject
router.post('/', function(req, res) {
    User.register(new User({ username : req.body.username ,name:req.body.name,email:req.body.email}), req.body.password, function(err, account) {
    if (err) {
        console.log(err)
        response.error=err
        return res.status(400).send(response)
    }  
    response.data="success"
    res.send(response)
    });
});


module.exports=router;