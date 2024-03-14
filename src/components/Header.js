import React from 'react'
import "../App.css"


import { Dropdown, FormControl, Nav, Navbar, Container, Badge, Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const { state: { cart }, dispatch, productState, productDispatch } = CartState()
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>

            <Container>
                <Navbar.Brand>
                    <Link to="/">ShoppingCart</Link>

                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }}
                        placeholder="search a products" className="m-auto" onChange={(e) => (
                            productDispatch({
                                type: "filter_by_search",
                                payload: e.target.value
                            })
                        )}>

                    </FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" >
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge bg="success">{cart.length}</Badge>

                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }} className='alignRight'>
                            {cart && cart.length > 0 ? (
                                <>
                                    {
                                        cart.map((prod) => (
                                            <span className='cartitem' key={prod.id}>
                                                <img src={prod.image} alt={prod.name}></img>
                                                <div className='cartItemDetail'>
                                                    <span>{prod.name}</span>
                                                    <span>${prod.price.split(".")[0]}</span>
                                                </div>
                                                <AiFillDelete fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        dispatch({
                                                            type: "Remove_from_cart", payload: prod
                                                        })
                                                    }} />
                                            </span>

                                        ))
                                    }
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>Go To Cart</Button>
                                    </Link>
                                </>
                            ) : (<span style={{ padding: 10 }} >Cart is Empty!</span>)}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>


        </Navbar >
    )
}

export default Header