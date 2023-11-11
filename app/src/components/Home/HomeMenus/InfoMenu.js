import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openCart } from "../../../features/cartSlice";


export default function InfoMenu() {

    const {
        description,
        price,
        size,
        color,
    } = useSelector(state => state.product);

    const dispatch = useDispatch();

    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedColor, setSelectedColor] = useState('black');


    const selectSize = (size) => {
        setSelectedSize(size);
    }

    const selectColor = (color) => {
        setSelectedColor(color);
    }


    const colors = () => {
        return Object.keys(color).map((x, index) =>
            <div className={selectedColor == x ? "color selected" : "color"}
                id={x}
                key={index}
                onClick={() => selectColor(x)}>
            </div >)
    }





    return (
        <>
            <div className="product-description-container">
                <p>
                    {description}
                </p>
            </div>
            <div className="product-size-color-container">
                <div className="product-sizes">
                    <div className="product-sizes-span-container">
                        <span>Size</span>
                        <span className="size-guide">Size Guide</span>
                    </div>
                    <div className="sizes">
                        {size.map((x, index) =>
                            <div className={selectedSize == x ? "size selected" : "size"}
                                key={index}
                                onClick={(() => selectSize(x))}>
                                {x}
                            </div>)}
                    </div>
                </div>

                <div className="product-color-container">
                    <span>Color</span>
                    <div className="colors">
                        {colors()}
                    </div>
                </div>

            </div>
            <div className="product-price-container">
                <div className="product-price">
                    <span id="price-span">$</span>
                    <span>{price}</span>
                </div>
                <div className="product-buttons-container">
                    <Link className="shop-now-btn">Shop Now</Link>
                    <Link to="/cart" className="add-to-cart-btn" onClick={() => dispatch(openCart())}>Add to cart</Link>
                </div>
            </div>

        </>
    )
}