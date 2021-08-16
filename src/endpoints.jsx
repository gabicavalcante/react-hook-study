import axios from 'axios';
import config from './config';

const ProductEndpoints = {
    getMethod(endpoint) {   
        return axios.get(
            config.baseUrl + endpoint
        ).then(
            response => { return response.data; }
        )
    }
};
export default ProductEndpoints;
