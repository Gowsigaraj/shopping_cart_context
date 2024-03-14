import { createContext, useContext, useReducer } from "react";
import faker from "@faker-js/faker";
import { cartReducer } from "./Reducer";
import { filterReducer } from "./Reducer";
const Cart = createContext();

faker.seed(99);
const Context = ({ children }) => {
    const products = [...Array(21)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        instock: faker.random.arrayElement([0, 5, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5])


    }))
    // console.log(products)

    const initialState = {
        products: products,
        cart: [],
    }
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const prodinitialState = {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ""
    }
    const [productState, productDispatch] = useReducer(filterReducer, prodinitialState)


    return (
        <Cart.Provider value={{ state, dispatch,productState,productDispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}