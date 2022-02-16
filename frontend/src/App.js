import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className='my-3'>
        <Container>
          {/* <Route path='/' component={HomeScreen} exact /> */}
          {/* <HomeScreen /> */}
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
