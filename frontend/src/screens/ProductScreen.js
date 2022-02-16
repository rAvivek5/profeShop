import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from '../components/Rating'
//import axios from 'axios'
// import products from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = () => {
  // const params = useParams()
  // const [product, setProduct] = useState({})
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const res = await axios.get(`/api/products/${params.id}`)
  //     setProduct(res.data)
  //   }
  //   fetchProduct()
  // }, [])

  // const product = products.find((p) => p._id === params.id)
  const params = useParams()
  const dispatch = useDispatch()
  
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch])

  return (
    <div>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroup.Item>
                <Button
                  className='addbasketbtn'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        {/* btn-block btn-lg */}
      </Row>
    </div>
  )
}

export default ProductScreen
