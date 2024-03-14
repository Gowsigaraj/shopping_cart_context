import React from 'react'
import "./style.css"
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../Context/Context'


const SingleProduct = ({ prod }) => {

    const { state: { cart }, dispatch } = CartState()
    // console.log(cart)    
    return (
        <div className='product'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle>
                        <span>${prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ? (<div>fastDelivery</div>) : (<div>4 days delivery</div>)}
                        <Rating rating={prod.ratings} />
                    </Card.Subtitle>
                    {cart.some(p => p.id === prod.id) ?



                        (<Button variant="danger" onClick={() => {
                            dispatch({
                                type: "Remove_from_cart", payload: prod
                            })
                        }}>
                            RemoveToCart</Button>) :

                        (<Button variant="primary" disabled={!prod.instock} onClick={() => {
                            dispatch({
                                type: "Add_to_cart", payload: prod

                            })
                        }} >



                            {!prod.instock ? "Out Of Stock" : "AddToCart"}

                        </Button>)}





                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct