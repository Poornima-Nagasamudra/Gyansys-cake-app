const express = require('express')
const  Order = require('../models/Orders')

const orderController = {}

orderController.list = (req, res) =>{
    Order.find({user: req.params.userId}).populate('product')
      .then((orders) => {
        res.status(200).json(orders)
      })
      .catch((err) =>{
        res.json(err)
      })
}

orderController.create = (req, res) =>{
    const {user, product, quantity} = req.body 
    const order = new Order({user, product, quantity})
    order.save()
      .then((savedOrder) => {
        res.json(savedOrder)
      })
      .catch((err) =>{
        res.status(400).json({error: err.message})
      })
}

orderController.update = (req, res) =>{
  const id = req.params.id 
  const status = req.params.status
  Order.findByIdAndUpdate(id, { status }, { new: true })
    .then((order) => {
      res.json(order)
    })
    .catch((err) =>{
      res.status(400).json({error: err.message})
    })
}

module.exports = orderController