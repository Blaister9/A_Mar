import React from 'react';
import Slider from "react-slick";
import Image from 'next/image'; // si estás utilizando Next.js


const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
    className: "shadow-lg rounded-lg"
  };

  return (
    <div className="carousel-container w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto mt-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center overflow-hidden relative">
            <Image width={1080} height={720} src={image} alt={`Dish ${index + 1}`} className="carousel-image mx-auto w-full object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
