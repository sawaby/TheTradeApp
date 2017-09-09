

// Trade model
// ============== 
// Require mongoose
var mongoose = require("mongoose");
// Create a schema class using mongoose's schema method 
var Schema = mongoose.Schema;
// Create the tradeSchema with our schema class 
var tradeSchema = new Schema({
    // Article, a string, must be entered   
    stock: {
        type: String,
        required: true, 
    },
    
    // date is just a string   
    date: String,
    saved: { 
        type: Boolean,
        default: false 
    },
    entryPrice: {
        type: Number,
    },
    sellPositive: {
        type: Number,
    }, 
    sellNegative: {
        type: Number,
    }, 
    accntSize: {
        type: Number,  
    }, 
    _creator: [{type: Schema.Types.ObjectId, ref: "User"}]
});
// Create the Trade model using the ArticleSchema 
var Trade = mongoose.model("Trade", tradeSchema);
// Export the Articles model
module.exports = Trade;

