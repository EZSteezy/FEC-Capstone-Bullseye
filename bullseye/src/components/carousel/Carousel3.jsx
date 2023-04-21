import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";
import Slider from 'react-slick';
import imageUrls from "./images/imgUrls.js";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from 'react-lazy-load';

const Carousel3 = ({ prod }) => {
    const products = prod;

    // Settings variable used to populate the "Slider" components from Slick
    const settings = {
        accessibility: true,
        dots: true,
        arrows: true,
        dotsClass: 'slick-dots',
        adaptiveHeight: true,
        slidesToShow: 7,
        slidesToScroll: 5,
        slide: 'div',
        draggable: false
    }

    return (
        <div className="carousel">
            <h4 className="main-carousel-header">More to consider</h4>
            {(products.length <= 0) ? <div><Loading /></div> :
                <div className="carousel-main">
                    <Slider {...settings}>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[20]} prod={products[21]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[21]} prod={products[22]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[22]} prod={products[23]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[23]} prod={products[24]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[24]} prod={products[25]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[25]} prod={products[26]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[26]} prod={products[27]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[27]} prod={products[28]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[28]} prod={products[29]} />
                            </div>
                        </LazyLoad>
                        <LazyLoad height={200} once>
                            <div>
                                <Card image={imageUrls[29]} prod={products[30]} />
                            </div>
                        </LazyLoad>
                    </Slider>
            </div>}
        </div>
    )
}

export default Carousel3;