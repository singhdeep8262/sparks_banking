const mongoose = require("mongoose");
const { getMaxListeners } = require("./transaction");
const Transaction = require("./transaction");

// mongoose.connect("mongodb+srv://sumitsingh:aassdd123456789@banking.rd9xt.mongodb.net/banking?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', ()=>console.log("Connected"));

const customrSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    Balance: Number,
    transactions:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Transaction"}],
    avatar:String,
    contact:Number,
    about:String
});

const Customer = mongoose.model("Customer", customrSchema);
module.exports = Customer;