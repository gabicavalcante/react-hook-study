import ProductEndpoints from './endpoints';
import config from './config';

const ProductService = { 
    loadProducts(dispatch) {
        dispatch({type: 'LOAD_PRODUCTS', payload: null})

        ProductEndpoints.getMethod(config.endPoints.products).then(products => {
            dispatch({type: 'GET_PRODUCTS', payload: products})
        }).catch(() => {
            dispatch({type: 'ERROR_PRODUCTS', payload: null})
        }).finally(() => {})
    }
}

export default ProductService;