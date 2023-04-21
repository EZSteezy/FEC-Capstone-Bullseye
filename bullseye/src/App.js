import React from "react";
import { ProductProvider } from "./components/context/ProductContext.js";
import Footer from "./components/Foot/Footer.js";
import Signup from "./components/Foot/Signup.js";
import Footimage from "./components/Foot/Footimage.js";
import Subsocial from "./components/Foot/Subsocial.js";
import End from "./components/Foot/End.js";
import './App.css';
import Header from "./components/header/header.jsx";
import Reviews from "./components/reviews/Reviews";
import Addcart from "./components/cart/cart";
import CarouselContainer from './components/carousel/CarouselContainer.jsx';
import Photo from "./components/product-photo/product-photo";
import About from "./components/about/about.jsx";




function App() {

  useEffect(() => {
    // get all the images on the page
    const images = document.querySelectorAll('img');
    // loop through each image
    images.forEach((image) => {
      // set the loading attribute to "lazy"
      image.setAttribute('loading', 'lazy');
    });
    // add an event listener to detect when the image is outside the viewport
    const handleScroll = () => {
      images.forEach((image) => {
        const { top, bottom } = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // if the image is outside the viewport, set the loading attribute to "auto"
        if (bottom < 0 || top > windowHeight) {
          image.setAttribute('loading', 'auto');
        } else {
          // otherwise, set the loading attribute back to "lazy"
          image.setAttribute('loading', 'lazy');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <ProductProvider>
      <Header />
      <div className="photo-cart-merg">
        <Photo />
        <Addcart />
      </div>
      <About />
      <CarouselContainer />
      <Reviews />
      <Signup />
      <Footer />
      <Footimage />
      <Subsocial />
      <End />
    </ProductProvider>
  );
}

export default App;
