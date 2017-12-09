import React from "react";
import "./CardProduct.css";

export default (props) => (
    <div className="card-product">
        <img className="card-product__image" src={props.img.src} alt={props.img.alt}/>
        <h3 className="card-product__name">{props.name}</h3>
        <p className="card-product__price">{props.price}</p>

    </div>
    
)




