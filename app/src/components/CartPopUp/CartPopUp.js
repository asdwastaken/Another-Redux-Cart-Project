import './cartPopUp.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal, closeCart, increaseAmount, decreaseAmount, removeItem } from "../../features/cartSlice";
import beltImage from '../../content/images/belt-image.png'
import glassesImage from '../../content/images/glasses-image.png'
import productImage from '../../content/images/product_image.png'
import { useEffect } from 'react';


export default function CartPopUp() {

    const { products, total, amount } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal(products))
    }, [total, amount])

    return (
        <div className="cart">
            <div className="cart-menus">
                <NavLink to="/cart" className="cart-menu-link">Cart</NavLink>
                <NavLink to="/checkout" className="cart-menu-link">Checkout</NavLink>
                <NavLink to="/shipping" className="cart-menu-link">Shipping</NavLink>
                <NavLink to="/done" className="cart-menu-link">Done</NavLink>
            </div>

            <div className="cart-products-container">

                <div className="cart-product-container">
                    <img src={beltImage} />
                    <div className="cart-product-info">
                        <h1>Gucci Leather belt</h1>
                        <div className="product-size">
                            <span>Size </span>
                            <span>70cm</span>
                        </div>
                        <div className="product-colors">
                            <span>Color </span>
                            <div className="colors">
                                <div className="color"></div>
                                <div className="color"></div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-product-counter">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <div className="cart-product-price">
                        <span>$</span>
                        <span className="price">32</span>
                    </div>


                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="remove-btn">
                        <path d="M6.34314 6.34326L17.6568 17.657" stroke="#D1D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6568 6.34326L6.34314 17.657" stroke="#D1D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>

                <div className="cart-product-container">
                    <img src={glassesImage} />
                    <div className="cart-product-info">
                        <h1>Fendi D-frame gold-tone sunglasses</h1>
                        <div className="product-size">
                            <span>Size </span>
                            <span>Height: 6 cm / 2.3 in. Width: 15 cm / 5.9 in.</span>
                        </div>
                        <div className="product-colors">
                            <span>Color </span>
                            <div className="colors">
                                <div className="color"></div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-product-counter">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <div className="cart-product-price">
                        <span>$</span>
                        <span className="price">26</span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="remove-btn">
                        <path d="M6.34314 6.34326L17.6568 17.657" stroke="#D1D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6568 6.34326L6.34314 17.657" stroke="#D1D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {products.map((x, index) => {
                    return (
                        <div className="cart-product-container" key={index}>
                            <img src={productImage} />
                            <div className="cart-product-info">
                                <h1>{x.title}</h1>
                                <div className="product-size">
                                    <span>Size </span>
                                    <span>{x.selectedSize}</span>
                                </div>
                                <div className="product-colors">
                                    <span>Color </span>
                                    <div className="colors">
                                        <div className={`color ${x.selectedColor}`}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-product-counter">
                                <button onClick={() => dispatch(decreaseAmount(x.title))}>-</button>
                                <span>{x.amount}</span>
                                <button onClick={() => dispatch(increaseAmount(x.title))}>+</button>
                            </div>
                            <div className="cart-product-price">
                                <span>$</span>
                                <span className="price">{x.price}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="remove-btn" onClick={()=>dispatch(removeItem(x.title))}>
                                <path d="M6.34314 6.34326L17.6568 17.657" stroke="#D1D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.6568 6.34326L6.34314 17.657" stroke="#D1D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    )
                })}

                <div className="price-total">
                    <span>Total amount </span>
                    <span>$</span>
                    <span className="price">{total}</span>
                </div>
            </div>

            <div className="cart-buttons-container">
                <Link to='/' className="back-btn" onClick={() => dispatch(closeCart())}>To shop</Link>
                <Link to='/checkout' className="continue-btn">Continue</Link>
            </div>
        </div>
    )
}