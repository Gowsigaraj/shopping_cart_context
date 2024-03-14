import React from 'react'
import Filter from './Filter'
import SingleProduct from './SingleProduct'
import { CartState } from '../Context/Context'
const Home = () => {

  const { state: { products }, productState: { byStock, byFastDelivery, byRating, sort, searchQuery } } = CartState();
  // console.log(products)
  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => (
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      ))
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.instock)
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts;
  }
  return (
    <div className='home'>
      <Filter />
      <div className='productContainer'>
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />


        ))}
      </div>
    </div>
  )
}

export default Home