import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import "./style.css"
import { CartState } from '../Context/Context'
const Filter = () => {
    // const [rate, setRate] = useState(5);

    const { productState: { byStock, byFastDelivery, byRating, sort, searchQuery }, productDispatch } = CartState();
    console.log(byStock, byFastDelivery, byRating, sort, searchQuery);
    return (
        <div className="filters">
            <span className='"title'>Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() => (
                        productDispatch({
                            type: "sort_by_price",
                            payload: "lowToHigh"

                        })

                    )}
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>

            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() => (
                        productDispatch({
                            type: "sort_by_price",
                            payload: "highToLow"

                        })

                    )}
                    checked={sort === "highToLow" ? true : false}
                />
            </span>

            <span>
                <Form.Check
                    inline
                    label="Include out of stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() => (
                        productDispatch({
                            type: "filter_by_stock",


                        })

                    )}
                    checked={byStock}
                />
            </span>

            <span>
                <Form.Check
                    inline
                    label="Fast Delivery only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() => (
                        productDispatch({
                            type: "filter_by_delivery",


                        })

                    )}
                    checked={byFastDelivery}
                />
            </span>

            <span>
                <label style={{ paddingRight: 10 }}>Rating</label>
                <Rating rating={byRating}
                    onClick={(i) => productDispatch({
                        type: "filter_by_Rating",
                        payload: i + 1,
                    })}
                    style={{ cursor: "pointer" }} />

            </span>
            <Button variant='light'
                onClick={() => (
                    productDispatch({
                        type: "Clear_filters",


                    })

                )}
            >Clear Filters</Button>

        </div>
    )
}

export default Filter