import './footer.css';
import logo from '../../content/Icons/logo.png'
import facebookIcon from '../../content/Icons/facebook-icon.png'
import twitterIcon from '../../content/Icons/twitter-icon.png'
import instagramIcon from '../../content/Icons/instagram-icon.png'
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Footer() {

    const { cartIsOpen } = useSelector(state => state.cart)
    const cartPath = useLocation().pathname;

    const cartPathCheck = () => {
        return cartPath == '/cart' || cartPath == '/checkout' || cartPath == '/shipping' || cartPath == '/done'
    }

    return (
        <div className={cartIsOpen || cartPathCheck() ? "open-cart footer" : "footer"}>
            <div className="footer-links">
                <div className="footer-links-inner">
                    <NavLink to='/' className="footer-link" activeClassName="active">Home</NavLink>
                    <NavLink to='/shop' className="footer-link" activeClassName="active">Shop</NavLink>
                    <NavLink to='/blog' className="footer-link" activeClassName="active">Blog</NavLink>
                    <NavLink to='/contact' className="footer-link" activeClassName="active">Contact</NavLink>
                </div>
            </div>
            <div className="footer-inner">

                <div className="footer-container">
                    <div className="footer-container-inner" id="logo-container">
                        <div className="logo">
                            <img src={logo} className="logo-icon" />
                            <h2>Clay Shop</h2>
                        </div>
                        <p>
                            Fashion is a popular
                            aesthetic expression at a particular time, place and in a specific context, especially in clothing, footwear, lifestyle, accessories, makeup.
                        </p>
                    </div>
                    <div className="footer-links-container">
                        <div className="footer-container-inner" id="hot-links-container">
                            <h2>Hot links</h2>
                            <div className="footer-container-inner-links">
                                <Link to='/'>Home</Link>
                                <Link to='/'>Shop</Link>
                                <Link to='/'>Blog</Link>
                                <Link to='/'>Contact</Link>
                            </div>
                        </div>

                        <div className="footer-container-inner" id="more-info-container">
                            <h2>More info</h2>
                            <div className="footer-container-inner-links">
                                <Link to='/'>How it works</Link>
                                <Link to='/'>About us</Link>
                                <Link to='/'>Decline rules</Link>
                                <Link to='/'>Terms & Conditions</Link>
                            </div>
                        </div>

                        <div className="footer-container-inner" id="customer-care-container">
                            <h2>Customer care</h2>
                            <div className="footer-container-inner-links">
                                <Link to='/'>FAQ</Link>
                                <Link to='/'>Terms of use</Link>
                                <Link to='/'>Privacy Policy</Link>
                                <Link to='/'>Discount system</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-socials-container">
                <div>© Clay Shop all rights reserved</div>
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
            </div>
        </div>
    )
}