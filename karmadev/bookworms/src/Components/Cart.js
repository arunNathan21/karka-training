import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Recent } from "./Recent";

export const Cart = () => {
    const location = useLocation();
    const productItem = location.state.products;

    const [cartItems, setCartItems] = useState([
        productItem 
    ]);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < 5) { 
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleDelete = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    const handleCheckout = () => {
    };

    const totalPrice = quantity * productItem.prices;

    return (
        <>
            <div className="container">
                <h2 className="cart_title"> Cart:</h2>
                {cartItems.map(item => (
                    <div key={item.id} className="row image_cart">
                        <div className="col-md-4 prdt_nm">
                            <h3><b>{item.Product_name}</b></h3>
                            <img src={item.image} alt={item.Product_name} style={{width: "120px"}}/>
                            
                        </div>
                        <div className="col-md-4 cart_text">
                            <h4 style={{ fontSize: '20px' }}>Price per item: Rs {item.prices}</h4>
                            <div>
                                <button onClick={handleDecrement} className="btn btn-warning">-</button>
                                <span className="quty">{quantity}</span>
                                <button onClick={handleIncrement} disabled={quantity > 5} className="btn btn-warning">+</button> 
                                <h3 style={{ fontSize: '16px' }} className="m-3">Total Stocks : 5</h3>
                            </div>
                        </div>
                        <div className="col-md-4 cart_text">
                            <h4 style={{ fontSize: '20px' }}>Total: Rs {totalPrice}<i class="btn btn-danger fa-solid fa-trash ml-3" onClick={() => handleDelete(item.id)}></i><i class="btn btn-warning fa-solid fa-cart-shopping ml-3" onClick={handleCheckout}></i></h4>
                        </div>
                    </div>
                ))}
            </div>
            <Recent/>
        </>
    )
}
