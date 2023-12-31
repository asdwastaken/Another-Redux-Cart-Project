import './navbar.css';
import logo from '../../content/Icons/logo.png'
import facebookIcon from '../../content/Icons/facebook-icon.png'
import twitterIcon from '../../content/Icons/twitter-icon.png'
import instagramIcon from '../../content/Icons/instagram-icon.png'
import cartIcon from '../../content/Icons/cart-icon.png'
import searchIcon from '../../content/Icons/search-icon.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Navbar() {

    const { cartIsOpen } = useSelector(state => state.cart)
    const cartPath = useLocation().pathname;

    const cartPathCheck = () => {
        return cartPath == '/cart' || cartPath == '/checkout' || cartPath == '/shipping' || cartPath == '/done'
    }

    return (
        <nav className={cartIsOpen || cartPathCheck() ? "navbar open-cart" : "navbar"}>
            <div className="navbar-container">
                <div className="navbar-upper">
                    <div className="logo">
                        <img src={logo} className="logo-icon" />
                        <h2>Clay Shop</h2>
                    </div>
                    <div className="social-icons">
                        <Link to='/' className='social-icon-link'>
                            <img src={instagramIcon} />
                        </Link>
                        <Link to='/' className='social-icon-link'>
                            <img src={twitterIcon} />
                        </Link>
                        <Link to='/' className='social-icon-link'>
                            <img src={facebookIcon} />
                        </Link>

                    </div>
                    <div className="cart-icons">
                        <img src={searchIcon} className='search-icon' />
                        <img src={cartIcon} />
                    </div>
                </div>
                <div className="navbar-links">
                    <div className="navbar-links-inner">
                        <NavLink className="nav-link" to='/' activeClassName="active">Home</NavLink>
                        <NavLink className="nav-link" to='/shop' activeClassName="active">Shop</NavLink>
                        <NavLink className="nav-link" to='/blog' activeClassName="active">Blog</NavLink>
                        <NavLink className="nav-link" to='/contact' activeClassName="active">Contact</NavLink>
                    </div>
                </div>

            </div>

        </nav>
    )
}