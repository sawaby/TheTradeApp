var mongoose = require("mongoose");
// var bcrypt = require('bcrypt');
// var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String
  }, 
  email: {
    type: String
  },
  pass: {
    type: String,
    bcrypt: true
  },
   salt: {
    type: String,
  },
  trades: [{type: Schema.Types.ObjectId, ref: "Trade"}]
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
