import './home.css';
import image1 from '../../content/images/product_image.png';
import image2 from '../../content/images/product_image1.png';
import image3 from '../../content/images/product_image2.png';
import image4 from '../../content/images/product_image3.png';
import image5 from '../../content/images/product_image4.png';
import heartIcon from '../../content/Icons/heart-icon.png';
import starActive from '../../content/Icons/star-active.png';
import starInactive from '../../content/Icons/star-inactive.png';

import { useState } from 'react';
import HomeMenus from './HomeMenus/HomeMenus';


export default function Home() {

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



    return (
        <div className="home">
            <div className="home-product-container">
                <div className="product-images">
                    <div className="main-image-container">
                        <img src={image1} className="main-product-image" />
                    </div>
                    <div className="secondary-images-container">
                        <div className="first-image-container">
                            <img src={image1} className="product-image first" />
                        </div>
                        <img src={image2} className="product-image" />
                        <img src={image3} className="product-image" />
                        <img src={image4} className="product-image" />
                        <img src={image5} className="product-image" />
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-info-top">
                        <div className="product-label">Popular</div>
                        <div className="heart-icon-container">
                            <img src={heartIcon} className="heart-icon" />
                        </div>
                    </div>
                    <h1>Black Valentino dress with tulle</h1>
                    <div className="review-stars-container">
                        <img src={starActive} className="review-star" />
                        <img src={starActive} className="review-star" />
                        <img src={starActive} className="review-star" />
                        <img src={starActive} className="review-star" />
                        <img src={starInactive} className="review-star" />
                        <span>132 reviews</span>
                    </div>

                    <HomeMenus onMenuClick={onMenuClick} activeMenu={activeMenu} />

                </div>
            </div>
        </div>
    )
}