import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>

      </div>
    </BrowserRouter>


  )
}

export default App