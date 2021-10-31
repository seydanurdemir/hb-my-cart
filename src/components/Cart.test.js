import reducer from '../features/reducers/cartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../features/actions/actionTypes';

const initState = {
    products: [
        { productId: 1, title: 'Apple iPhone 11 Pro Maxi', desc: "Description1", brand: "Apple", color: "Black", price: 100 },
        { productId: 2, title: 'iPhone 11', desc: "Description2", brand: "Apple", color: "Yellow", price: 200 },
        { productId: 3, title: 'iPhone 11 Kırmızı', desc: "Description3", brand: "Apple", color: "Red", price: 300 },
        { productId: 4, title: 'Apple Telefon', desc: "Description4", brand: "Apple", color: "Purple", price: 400 }
    ],
    addedProducts: [],
    totalPrice: 0
};

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
});

test('should handle a todo being added to an empty list', () => {
    expect(reducer(initState,
        {
            type: ADD_TO_CART,
            payload: { productId: 2, title: 'iPhone 11', desc: "Description2", brand: "Apple", color: "Yellow", price: 200 }
        })).toEqual({
            ...initState,
            products: [
                { productId: 1, title: 'Apple iPhone 11', desc: "Description1", brand: "Apple", color: "Black", price: 100, },
                { productId: 2, title: 'iPhone 11', desc: "Description2", brand: "Apple", color: "Yellow", price: 200 },
                { productId: 3, title: 'iPhone 11 Kırmızı', desc: "Description3", brand: "Apple", color: "Red", price: 300 },
                { productId: 4, title: 'Apple Telefon', desc: "Description4", brand: "Apple", color: "Purple", price: 400 }
            ],
            addedProducts: [
                { productId: 2, title: 'iPhone 11', desc: "Description2", brand: "Apple", color: "Yellow", price: 200 }
            ],
            totalPrice: 200
        });
});