import React from 'react';


function productReducer(state = {products: []}, action) {
    switch(action.type) {
        case "LOAD_PRODUCTS":
            return {
                ...state, products: [], error: false
            };
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload, error: false
            };
        case 'ERROR_USERS':
            return { ...state, products: [], error: true }
        default:
            return state;
    }
}

export default productReducer;