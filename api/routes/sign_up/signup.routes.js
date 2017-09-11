const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Trade = require('../../models/trade');
//const Login = require('');
var bcrypt = require('bcrypt');
//const myPlaintextPassword = '999';
//const someOtherPlaintextPassword = 'not_bacon';
var saltNum = 10;
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(saltNum, function (err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//         console.log("hash hash ", hash);
//use random salt
// user.pass = hash;
// console.log("user hash" ,user.pass);
//var user = new User({ name: 'Michael', email: 'michael@me.com', pass: hash,salt: salt, trades: ["599e3a382101ef1a0004b9a5", "599e3cdb2a778f04d84f0c5a"] });
//    var trade = new Trade({ stock: 'LkE', _creator: user._id });


//testing code


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
router.post('/signup', (req, res) => {

    //hash and evaluate req.body.pass
    //send 200 response
    //if the response is 200 redirect them to index.html
    //if the pass is incorect send them a 401 response 
    //put an alert or a modal saying the bad pass
    // QUERY DATABASE FOR USER INPUT EMAIL
    //var USER = req.body;
    bcrypt.genSalt(saltNum, function (err, salt) {
        bcrypt.hash(req.body.pass, salt, function (err, hash) {
            console.log("hash sign up ", hash);
            var user = new User({ name: req.body.name, email: req.body.email, pass: hash, salt: salt, trades: ["599e3a382101ef1a0004b9a5", "599e3cdb2a778f04d84f0c5a"] });
            var trade = new Trade({ stock: 'LkE', _creator: user._id });
            console.log("here is the body signup", user)
            user.save(function (err) {
                if (err) {
                    return res.json({ success: false, msg: 'Username/email already exists.' });
                } else {
                    res.json({ success: true, msg: 'Successful created new user.', user: user.name });
                    //var token = jwt.encode(user, 'secret');
                    var token = jwt.sign({
                        'email': req.body.email
                    }, "secret", {
                            expiresIn: '24h'
                        });
                    trade._creator.push(user);

                    trade.save();
                }
            }).then(() => {
                console.log("this is user", user);
            });
            trade.save(function (err, tr) {

                user.trades.push(tr);
                user.save();
            }).then(() => {
                console.log("this is trade", tr);
            });

        });
    });

});
// User.findOne({ email: req.body.email })

//     // IF USER EXISTS, THEN HASH PASSWORD AND CHECK HASH-TO-PASSWORD
//     .then((data) => {
//         console.log("data is ", data);
//         var hash = bcrypt.hashSync(req.body.pass, data.salt);
//         console.log(req.body.email)
//         if (data.pass === hash) {
//             var token = jwt.sign({
//                 'email': req.body.email
//             }, "secret", {
//                     expiresIn: '24h'
//                 });
//             res.status(200);
//             res.json({
//                 success: true,
//                 message: 'Token ready',
//                 token: token
//             });
//         } else {
//             res.status(401);
//             res.json({
//                 success: false,
//                 message: 'Incorrect login information',
//                 token: null
//             });
//         }
//     })

//     // ERROR IF EMAIL DOES Not EXIST
//     .catch((err) => {
//         res.status(500);
//         console.log(err);
//         res.json({
//             success: false,
//             message: 'Required Fields Can\'t be Left Blank',
//             token: null
//         })
//     });
// });
module.exports = router;
