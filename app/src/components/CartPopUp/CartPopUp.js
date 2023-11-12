import './cartPopUp.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal, closeCart, increaseAmount, decreaseAmount, removeItem } from "../../features/cartSlice";

import { useEffect, useState } from 'react';


export default function CartPopUp() {

    const { products, total, amount } = useSelector(state => state.cart);
    const [cartProducts, setCartProducts] = useState([]);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(calculateTotal(products))
    }, [total, amount])

    useEffect(() => {
        const serializedProducts = localStorage.getItem('cartProducts');
        if (serializedProducts) {
            setCartProducts(JSON.parse(serializedProducts));
        }
    }, [products])

    return (
        <div className="cart">
            <div className="cart-menus">
                <NavLink to="/cart" className="cart-menu-link">Cart</NavLink>
                <NavLink to="/checkout" className="cart-menu-link">Checkout</NavLink>
                <NavLink to="/shipping" className="cart-menu-link">Shipping</NavLink>
                <NavLink to="/done" className="cart-menu-link">Done</NavLink>
            </div>

            <div className="cart-products-container">

                {cartProducts.map((x, index) => {
                    return (
                        <div className="cart-product-container" key={index}>
                            <img src={x.images[0]} />
                            <div className="cart-product-info">
                                <h1>{x.title}</h1>
                                <div className="product-size">
                                    <span>Size </span>
                                    <span>{x.selectedSize}</span>
                                </div>
                                <div className="product-colors">
                                    <span>Color </span>
                                    <div className="colors">
                                        {x.selectedColor.map(color => <div className={`color ${color}`}></div>)}
                                    </div>
                                </div>
                            </div>

                            <div className="cart-product-counter">
                                <button onClick={() => dispatch(decreaseAmount(x.id))}>-</button>
                                <span>{x.amount}</span>
                                <button onClick={() => dispatch(increaseAmount(x.id))}>+</button>
                            </div>
                            <div className="cart-product-price">
                                <span>$</span>
                                <span className="price">{Number(x.price) * x.amount}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="remove-btn" onClick={() => dispatch(removeItem(x.id))}>
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