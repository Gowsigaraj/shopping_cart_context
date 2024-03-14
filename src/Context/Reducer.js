export const cartReducer = (state, action) => {
    switch (action.type) {

        case "Add_to_cart":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "Remove_from_cart":
            return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) }
        case "change_cart_qty":
            return { ...state, cart: state.cart.filter((c) => c.id === action.payload.id ? (c.qty = action.payload.qty) : (c.qty)) }

        default:
            return state

    }

}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "sort_by_price":
            return { ...state, sort: action.payload };

        case "filter_by_stock":
            return { ...state, byStock: !state.byStock };

        case "filter_by_delivery":
            return { ...state, byFastDelivery: !state.byFastDelivery };

        case "filter_by_Rating":
            return { ...state, byRating: action.payload };

        case "filter_by_search":
            return { ...state, searchQuery: action.payload };

        case "Clear_filters":
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: ""
            }

        default:
            return state
    }
}