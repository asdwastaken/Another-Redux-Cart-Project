import './home.css';
import heartIcon from '../../content/Icons/heart-icon.png';
import starActive from '../../content/Icons/star-active.png';
import starInactive from '../../content/Icons/star-inactive.png';

import HomeMenus from './HomeMenus/HomeMenus';
import Reviews from './Reviews/Reviews';

import { getProduct } from '../../services/productService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateRating, likeProduct, } from '../../features/productSlice';
import { Outlet, useLocation } from 'react-router-dom';

export default function Home() {

    const [activeImage, setActiveImage] = useState('');
    const dispatch = useDispatch();
    const cartPath = useLocation().pathname;

    const cartPathCheck = () => {
        return cartPath == '/cart' || cartPath == '/checkout' || cartPath == '/shipping' || cartPath == '/done'
    }



    const {
        title,
        reviews,
        liked,
        starRating,
        images
    } = useSelector(state => state.product);

    const { cartIsOpen } = useSelector(state => state.cart)



    useEffect(() => {
        dispatch(getProduct('1'))
            .then((result) => {
                setActiveImage(result.payload.images[0])
                dispatch(calculateRating())
            });

    }, [])


    const onImageClick = (image) => {
        setActiveImage(image)
    }


    const [activeMenu, setActiveMenu] = useState({
        info: true,
        brand: false,
        delivery: false,
    })

    const onMenuClick = (menu) => {
        setActiveMenu((state) => ({
            info: false,
            brand: false,
            delivery: false,
            [menu]: true,
        }));
    }



    const renderRating = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(< img src={starActive} className="review-star" key={i} name={`star${i + 1}`} />)
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<img key={i} src={starInactive} className="review-star" name={`star${i + 1}`} />);
        }

        return stars;
    }





    return (
        <>
            <Outlet />

            <div className={cartIsOpen || cartPathCheck() ? "open-cart home" : "home"}>
                <div className="home-product-container">
                    <div className="product-images">
                        <div className="main-image-container">
                            <img src={activeImage} className="main-product-image" />
                        </div>
                        <div className="secondary-images-container">
                            {images.map((img, index) => (
                                <div key={index} className={index === 0 ? "first-image-container" : "product-image-container"}>
                                    <img src={img} className={`product-image ${index === 0 ? 'first' : ''}`} onClick={() => onImageClick(img)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="product-info-top">
                            <div className="product-label">Popular</div>
                            <div className="heart-icon-container">
                                <img src={heartIcon} className="heart-icon" onClick={() => dispatch(likeProduct())} />
                            </div>
                        </div>
                        <h1>{title}</h1>
                        <div className="review-stars-container">
                            {renderRating(starRating)}
                            <span>132 reviews</span>
                        </div>

                        <HomeMenus
                            onMenuClick={onMenuClick}
                            activeMenu={activeMenu}
                        />
                    </div>
                </div>
                <Reviews
                    reviews={reviews}
                    renderRating={renderRating}
                    starRating={starRating}
                />
            </div>
        </>
    )
}