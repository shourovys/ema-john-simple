import React, { useState } from 'react';
import "./Shop.css"
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const fast10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(fast10);
    

    return (
      <div className="shop-container">
        <div className="products-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
        </div>

        <div className="cade-container">
          <h1>This is cade</h1>
        </div>
      </div>
    );
};

export default Shop;