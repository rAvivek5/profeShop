import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
// import products from '../products'
import axios from 'axios'
import { listProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { Audio, Oval } from 'react-loader-spinner'

const HomeScreen = () => {
  //products{what we want to call the state}
  //setProduct{what we want ti call the function to manipulate or change the piece of state}
  //[] {whatever we want to set default we right inside of useState([*here*])}
  // const [products, setProduct] = useState([])
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>LATEST PRODUCTS</h1>
      {loading ? (
        <div className='flexjustifycenter'>
          <Oval
            heigth='100'
            width='100'
            color='grey'
            secondaryColor='grey'
            ariaLabel='loading'
          />
        </div>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
