const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Trade = require('../../models/trade');
//const Login = require('');
var bcrypt = require('bcrypt');
const myPlaintextPassword = '999';
//const someOtherPlaintextPassword = 'not_bacon';
var saltNum = 10;
const jwt = require('jsonwebtoken');





// Trade.findById("",function (err, user) {


// });



bcrypt.genSalt(saltNum, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        console.log("hash hash ", hash);
        //use random salt
        // user.pass = hash;
        // console.log("user hash" ,user.pass);
var user = new User({ name: 'Michael', email: 'michael@me.com', pass: hash,salt: salt, trades: ["599e3a382101ef1a0004b9a5", "599e3cdb2a778f04d84f0c5a"] });
var trade = new Trade({ stock: 'LkE', _creator: user._id });
user.save(function (err) {
    trade._creator.push(user);
    
    trade.save();
}).then(() => {
    console.log("this is user" ,user);
});
trade.save(function (err, tr) {
  
   user.trades.push(tr);
   user.save();
}).then(()=>{
      console.log("this is trade" ,tr);
});
    });
});


