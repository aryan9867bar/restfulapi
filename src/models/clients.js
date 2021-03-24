const mongoose = require("mongoose");
const validator = require("validator");

const clientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"E-mail id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("Invalid Email");
            } 
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    }

})

const client = new mongoose.model('client', clientSchema);

module.exports = client;