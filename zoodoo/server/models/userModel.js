const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const schema = mongoose.Schema

const userSchema = new schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    height: {
        type:Number,
        required:true
    },
    weight: {
        type:Number,
        required:true
    },
    createPassword:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
})

//signup method
userSchema.statics.signup = async function( firstName, lastName, email, age,  height, weight, createPassword, confirmPassword ){
    //validation
    if(!firstName || !lastName || !email || !age || !height || !weight || !createPassword || !confirmPassword){
        throw Error("all fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Entered email is not a valid email")
    }

    if(createPassword !== confirmPassword ){
        throw Error("created password and confirmed passwords are not matching")
    }

    if(!validator.isStrongPassword(createPassword)){
        throw Error("please create a Strong password")
    }

    const exist = await this.findOne({email})

    if(exist){
        throw Error("This email already has a account")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(createPassword, salt)

    const newUser = await this.create({ firstName, lastName, email, age,  height, weight, createPassword: hash, confirmPassword:hash })

    return newUser
}

module.exports = mongoose.model('User', userSchema)