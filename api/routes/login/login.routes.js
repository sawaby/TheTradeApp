const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Trade = require('../../models/trade');
//const Login = require('');
var bcrypt = require('bcrypt');
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var saltNum = 10;
const jwt = require('jsonwebtoken');

// const sign_up = require("../sign_up/sign_up.routes");

// TEST
// var req = {
//     email: 'asdf@asdf.com',
//     password: 'asdf'
// };

//check if the user is a new user
// router.post('/singUP', (req, res) => {
//     User.findOne({ email: req.body.email })
//         .then((data) => {

//             res.json({
//                 success: false,
//                 message: 'This Email Address is Already Registered!',
//                 token: null
//             }).catch((err) => {
//                 res.json(err);
//             });
//         }
//         );
//     var hash = bcrypt.hashSync(req.body.password, data.salt);
//     var user = new User(req.body);
//     user.save(function (err) {
//         trade._creator.push(user);
//         console.log(user);
//         trade.save();
//     });
// });

 
    // LOGIN ROUTE 
    router.post('/login', (req, res) => {
        //hash and evaluate req.body.pass
        //send 200 response
        //if the response is 200 redirect them to index.html
        //if the pass is incorect send them a 401 response 
        //put an alert or a modal saying the bad pass
        // QUERY DATABASE FOR USER INPUT EMAIL
        console.log("here is the body", req.body)
        User.findOne({ email: req.body.email })

            // IF USER EXISTS, THEN HASH PASSWORD AND CHECK HASH-TO-PASSWORD
            .then((data) => {
                console.log("data is ",data);
                var hash = bcrypt.hashSync(req.body.pass, data.salt);
                console.log(req.body.email)
                if (data.pass === hash) {
                    var token = jwt.sign({
                        'email': req.body.email
                    }, "secret", {
                            expiresIn: '24h'
                        });
                    res.status(200);
                    res.json({
                        success: true,
                        message: 'Token ready',
                        token: token
                    });
                } else {
                    res.status(401);
                    res.json({
                        success: false,
                        message: 'Incorrect login information',
                        token: null
                    });
                }
            })

            // ERROR IF EMAIL DOES Not EXIST
            .catch((err) => {
                res.status(500);
                console.log(err);
                res.json({
                    success: false,
                    message: 'User not found',
                    token: null
                })
            });

        // OAUTH POP-UP 

        // 
    });

    module.exports = router;