import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Product.css"

const Product = (props) => {
    const { name, img, seller,stock,price } = props.product;
    console.log(props.product);
    
    return (
      <div className="product">
        <div className="product-img">
          <img src={img} alt="" />
        </div>

        <div className="product-info">
          <h4>{name}</h4>
          <p>
            <small>by : {seller}</small>
          </p>
          <p>Price : ${price}</p>
          <p>
            <small>only {stock} left in stock. - oder now</small>
          </p>
          <button className="buy-btn">
                <FontAwesomeIcon icon={faCoffee} />
                Add to Cade
          </button>
        </div>
      </div>
    );
};

export default Product;