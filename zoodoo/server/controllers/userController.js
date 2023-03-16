const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//create a jwt token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

//signup a user
const signupUser = async (req, res) => {
    const { firstName, lastName, email, age,  height, weight, createPassword, confirmPassword } = req.body

    try{
        const newUser = await User.signup(firstName, lastName, email, age,  height, weight, createPassword, confirmPassword)
        //creating a new token
        const token = createToken(newUser._id)

        res.status(200).json({email, token})

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = { signupUser }