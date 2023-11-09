

export default function InfoMenu() {
    return (
        <>
            <div className="product-description-container">
                <p>
                    Dress with tulle and collar Peter Pan from REDValentino
                    (Red Valentino). Peter Pan collar, tulle panels, sleeveless model,
                    concealed back zipper and pleated skirt. Black colour.
                </p>
            </div>
            <div className="product-size-color-container">
                <div className="product-sizes">
                    <div className="product-sizes-span-container">
                        <span>Size</span>
                        <span className="size-guide">Size Guide</span>
                    </div>
                    <div className="sizes">
                        <div className="size">XS</div>
                        <div className="size">S</div>
                        <div className="size">M</div>
                    </div>
                </div>

                <div className="product-color-container">
                    <span>Color</span>
                    <div className="colors">
                        <div className="color" id="black"></div>
                        <div className="color" id="blue"></div>
                        <div className="color" id="green"></div>
                    </div>
                </div>

            </div>
            <div className="product-price-container">
                <div className="product-price">
                    <span id="price-span">$</span>
                    <span>1315</span>
                </div>
                <div className="product-buttons-container">
                    <button className="shop-now-btn">Shop Now</button>
                    <button className="add-to-cart-btn">Add to cart</button>
                </div>
            </div>

        </>
    )
}