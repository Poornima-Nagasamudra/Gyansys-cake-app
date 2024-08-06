const express = require('express')
const  Product = require('../models/Product')

const productController = {}

productController.list = (req, res) =>{
    Product.find()
      .then((products) => {
        res.status(200).json(products)
      })
      .catch((err) =>{
        res.json(err)
      })
}

productController.create = (req, res) =>{
    const {name, description, price, image} = req.body 
    const product = new Product({name, description, price, image})
    product.save()
      .then((savedProduct) => {
        res.json(savedProduct)
      })
      .catch((err) =>{
        res.status(400).json({error: err.message})
      })
}

productController.update = (req, res) =>{
  const id = req.params.id
  const { name, description, price, image } = req.body;
  Product.findByIdAndUpdate(id, { name, description, price, image }, { new: true })
    .then((products) => {
      res.json(products)
    })
    .catch((err) =>{
      res.status(400).json({error: err.message})
    })
}

productController.destroy = (req, res) => {
  const id = req.params.id 
  Product.findByIdAndDelete(id)
    .then((products) =>{
      res.json(products)
    })
    .catch((err) =>{
      res.status(400).json({error: err.message})
    })
}

module.exports = productController