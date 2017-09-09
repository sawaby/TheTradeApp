const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// CREATES NEW USER IN MONGOOSE
router.post("/", (req, res) => {
    console.log(req.body);
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    console.log(user);
    user.save()
    .then(resp => {
        res.json(resp);
    })
    .catch(err => {
        res.json(err);
    })
})
module.exports = router;