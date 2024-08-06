const express = require('express')
const  Contact = require('../models/Contact')

const contactController = {}

contactController.list = (req, res) =>{
    Contact.find()
      .then((contacts) => {
        res.status(200).json(contacts)
      })
      .catch((err) =>{
        res.json(err)
      })
}

contactController.create = (req, res) =>{
    const {name, email, message} = req.body 
    const contact = new Contact({name, email, message})
    contact.save()
      .then((contacts) => {
        res.json(contacts)
      })
      .catch((err) =>{
        res.status(400).json({error: err.message})
      })
}

module.exports = contactController