import { useState } from "react";
import { useSelector } from "react-redux";


export default function InfoMenu() {

    const {
        description,
        price,
        size,
        color,
    } = useSelector(state => state.product);

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');


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
                    <button className="shop-now-btn">Shop Now</button>
                    <button className="add-to-cart-btn">Add to cart</button>
                </div>
            </div>

        </>
    )
}