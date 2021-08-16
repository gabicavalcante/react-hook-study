import React, { useState } from 'react';
import './Product.css';

const Product = () => {
    const [cart, setCart] = useState([])
    // const [total, setTotal] = useState(0)

    const products = [
        {
          emoji: '🍦',
          name: 'ice cream',
          price: 5
        },
        {
          emoji: '🍩',
          name: 'donuts',
          price: 2.5,
        },
        {
          emoji: '🍉',
          name: 'watermelon',
          price: 4
        }
    ];
      
    /*
    const add = (product) => {
        setCart([...cart, product.name]);
        setTotal(total+product.price);
    }
    */

    const new_add = (product) => {
        setCart([...cart, product]);
    }

    const calc_total = () => {
        const total = cart.reduce(
            (totalCost, item) => totalCost + item.price, 0
        );
        return total;
    }

    /*
    const remove = (product) => {
        const index = cart.indexOf(product.name) 
        if (index > -1) {
            const updated_cart = cart;
            updated_cart.splice(index, 1);
            setCart(updated_cart);
            setTotal(total - product.price);
        }  
    }
    */

    const new_remove = (product) => {
        const index = cart.findIndex(item => item.name === product.name);
        
        if (index >= 0) {
            const updated_cart = cart;
            updated_cart.splice(index, 1);
            setCart([...updated_cart]);
        }  
    }

    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>
                Total {calc_total()}
            </div>

            <div>
                {
                    products.map(product => (
                        <div key={product.name}>
                                <div className="product">
                                    <span role="img" aria-label={product.name}>{product.emoji}</span>
                                </div>

                                <button onClick={() => new_add(product)}>Add</button> 
                                <button onClick={() => new_remove(product)}>Remove</button>
                        </div>
                    ))
                }
                
            </div>

        </div>
    );
}
  
export default Product;
  