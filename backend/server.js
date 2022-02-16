import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
// import productsOS from './data/products.js'
import productRoutes from './routes/productRoutes.js'

// common javascript syntacs
// const express = require('express')
// const dotenv = require('dotenv')
// const productsOS = require('./data/products')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is Running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

// app.get('/api/products', (req, res) => {
//   res.json(productsOS)
// })

// app.get('/api/products/:id', (req, res) => {
//   const product = productsOS.find((p) => p._id === req.params.id)
//   res.json(product)
// })
const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV
app.listen(
  PORT,
  console.log(`Server Running in ${MODE} mode on port ${PORT}`.yellow.bold)
)
