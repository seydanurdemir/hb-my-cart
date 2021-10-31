// functions with two parameter (state and action) which return new state
// exists multiple reducer function but in the last need to merge all together combineReducer

import Item1 from '../../images/Item1.png';
import Item2 from '../../images/Item2.png';
import Item3 from '../../images/Item3.png';
import Item4 from '../../images/Item4.png';

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initState = {
    products: [
        { productId: 1, title: 'Apple iPhone 11 Pro Maxi', desc: "Max 11 iPhone (Max 2 Line)", brand: "Apple", color: "Black", price: 100, img: Item1 },
        { productId: 2, title: 'iPhone 11', desc: "", brand: "Apple", color: "Yellow", price: 200, img: Item2 },
        { productId: 3, title: 'iPhone 11 Kırmızı', desc: "", brand: "Apple", color: "Red", price: 300, img: Item3 },
        { productId: 4, title: 'Apple Telefon', desc: "", brand: "Apple", color: "Purple", price: 400, img: Item4 }
    ],
    addedProducts: [],
    totalPrice: 0
}

const cartReducer = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        // find product to added
        let addedProduct = state.products.find(product => product.productId === action.productId)
        // control whether product was added to cart or not
        let isExist = state.addedProducts.find(product => product.productId === action.productId)
        // if product was not added to cart, add product to cart, and calculate new total price
        if (!isExist) {
            // calculate new total price
            let newTotalPrice = state.totalPrice + addedProduct.price
            return {
                ...state,
                addedProducts: [...state.addedProducts, addedProduct],
                totalPrice: newTotalPrice
            };
        }
    }

    if (action.type === REMOVE_FROM_CART) {
        // find product to removed
        let removedProduct = state.addedProducts.find(product => product.productId === action.productId)
        // create new products list excepts removed product
        let newProducts = state.addedProducts.filter(product => product.productId !== action.productId)
        // calculate new total price
        let newTotalPrice = state.totalPrice - removedProduct.price;
        return {
            ...state,
            addedProducts: newProducts,
            totalPrice: newTotalPrice
        };
    }

    return state;
}

export default cartReducer;
