import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecent } from "./RecentContext";
import { product } from './json';
import { Recent } from "./Recent";


export const Viewproduct = ({ updateCartCount }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addToRecent } = useRecent();
    const productItem = product.find(item => item.id === parseInt(id));
console.log(productItem.image,"ikik")
    const handleAddToCart = () => {
        updateCartCount();
        navigate('/Cart', { state: { products: productItem } });
    };


    React.useEffect(() => {
        addToRecent(productItem);
      }, [addToRecent, productItem]);
  
    return (
        <>

            <div className="row view_prdt">
                <div className="col-md-4 vp">
                {/* <img src={productItem.image} alt={productItem.Product_name} /> */}
                    <img src={productItem.image} />
                </div>
                <div className="col-md-4 vp">
                <h3>{productItem.Product_name}</h3>
                    
                    <div>
                        <p><span><b>Save Extra</b></span> with 2 offers</p>
                        <p><span><b>Bank Offer (2)</b></span>: 10% Instant Discount up to INR 500 on J and K Bank Card Non-EMI Trxn. Minimum purchase value ₹3,000 See All</p>
                        <p><span><b>Partner Offers</b></span>: Get GST invoice and save up to 28% on business purchases. Sign up for free DetailsPartner Offers: Get GST invoice and save up to 28% on business purchases. Sign up for free Details</p>
                        
                    </div>
                    {productItem.describtion}
                </div>
                <div className="col-md-4 hs vp">
                    <div className="hdc">
                    <h4>Hardcover</h4>
                     <h4>  Rs:  {productItem.prices} </h4>
                        <button className="btn btn-warning rounded-pill" onClick={handleAddToCart}>Add to cart</button>
                        </div>
                            <div>
                        Fulfilled
FREE delivery Monday, 1 April on orders dispatched by Bookworms over {productItem.prices}. Details
Or fastest delivery Today. Order within 4 hrs 18 mins.
</div>
                </div>
            </div>
             <Recent/>
        </>
    )
}