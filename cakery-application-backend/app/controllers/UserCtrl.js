const express = require('express')
const User = require('../models/User')

const userController = {}

userController.register = (req, res)  => {
   const {name, email, password} = req.body
   const user = new User({name, email, password})

   user.save()
     .then((savedUser) => {
        res.json(savedUser)
     })
     .catch((err) => {
        res.status(400).json({error: err.message})
     })
}

userController.login = (req, res) => {
    const {email, password} = req.body 
    User.findOne({email})
      .then((user) =>{
        if(user && user.password === password){
            res.json(user)
        } else{
            res.status(401).json({error: 'Invalid email or password'})
        }
      })
      .catch((err) => {
        res.status(400).json({error: err.message})
      })
}

module.exports = userController